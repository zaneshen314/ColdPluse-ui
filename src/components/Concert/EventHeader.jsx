import React from "react";

const EventHeader = ({ onSeeAllClick }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
            }}
        >
            <h2 style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>🎵 Concert Dates</h2>
            <button
                onClick={onSeeAllClick}
                style={{
                    backgroundColor: "transparent",
                    color: "#00d8ff",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                See All →
            </button>
        </div>
    );
};

export default EventHeader;