import React from 'react';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '32px', zIndex: 1, fontSize: '2rem' }}
            onClick={onClick}
        >
            &#9664; {/* Left arrow symbol */}
        </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '48px', zIndex: 1, fontSize: '2rem'}}
            onClick={onClick}
        >
            &#9654; {/* Right arrow symbol */}
        </div>
    );
};

export { PrevArrow, NextArrow };