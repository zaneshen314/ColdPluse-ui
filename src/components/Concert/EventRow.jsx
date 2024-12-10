import React from "react";

const EventRow = ({ event }) => {
    const handleBuyClick = () => {
        window.location.href = `/buy/${event.id}`; // Navigate to the buying page
    };

    return (
        <tr style={{ borderBottom: "1px solid #444" }}>
            <td style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
                {new Date(event.start_time).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}
            </td>
            <td style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
                {event.name}
            </td>
            <td style={{ padding: "10px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
                {event.venue}
            </td>
            <td style={{ padding: "10px", textAlign: "center" }}>
                <button
                    onClick={handleBuyClick}
                    style={{
                        backgroundColor: "#00d8ff",
                        color: "#001f3f",
                        border: "none",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Buy
                </button>
            </td>
        </tr>
    );
};

export default EventRow;