import React from 'react';
import './Concerts.css';

const slides = [
    {
        title: "Machu Picchu",
        subtitle: "Peru",
        description: "Adventure is never far away",
        image:
            "/poster3.jpg"
    },
    {
        title: "Chamonix",
        subtitle: "France",
        description: "Let your dreams come true",
        image:
            "/poster2.jpg"
    },
    {
        title: "Mimisa Rocks",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "/poster1.jpg"
    },
    {
        title: "Mimisa Rocks",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "/poster4.jpg"
    },
];

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
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
};

function Slide({slide, offset}) {
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
                    backgroundImage: `url('${slide.image}')`
                }}
            />

            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            >
            </div>
        </div>
    );
}

function Concerts() {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        <div className="container-wrapper">
            <div className="slide-wrapper">
                <div className="slides">
                    <button onClick={() => dispatch({type: "NEXT"})}>‹</button>

                    {[...slides, ...slides, ...slides].map((slide, i) => {
                        let offset = slides.length + (state.slideIndex - i);
                        return <Slide slide={slide} offset={offset} key={i}/>;
                    })}
                    <button onClick={() => dispatch({type: "PREV"})}>›</button>
                </div>
            </div>
        </div>
    );
}

export default Concerts;