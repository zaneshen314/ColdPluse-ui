import React, { useEffect, useState, useReducer } from 'react';
import './Concerts.css';
import { getAllConcerts } from '../api/concertSessionEvent';

function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 2
};

const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % state.slides.length
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? state.slides.length - 1 : state.slideIndex - 1
        };
    }
    if (event.type === "SET_SLIDES") {
        return {
            ...state,
            slides: event.slides
        };
    }
};

function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    const handleClick = () => {
        window.location.href = "/ticket";
    };

    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
            onClick={handleClick}
        >
            <div
                className="slideBackground"
                style={{
                    backgroundImage: `url('${slide.imgUrl}')`
                }}
            />

            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.imgUrl}')`
                }}
            >
            </div>
        </div>
    );
}

function Concerts() {
    const [state, dispatch] = useReducer(slidesReducer, { ...initialState, slides: [] });

    useEffect(() => {
        const fetchConcerts = async () => {
            try {
                const response = await getAllConcerts();
                dispatch({ type: "SET_SLIDES", slides: response });
            } catch (error) {
                console.error("Error fetching concerts:", error);
            }
        };

        fetchConcerts();
    }, []);

    return (
        <div className="container-wrapper">
            <div className="slide-wrapper">
                <div className="slides">
                    <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>

                    {[...state.slides, ...state.slides, ...state.slides].map((slide, i) => {
                        let offset = state.slides.length + (state.slideIndex - i);
                        return <Slide slide={slide} offset={offset} key={i} />;
                    })}
                    <button onClick={() => dispatch({ type: "PREV" })}>›</button>
                </div>
            </div>
        </div>
    );
}

export default Concerts;