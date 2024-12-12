import React from "react";
import "./BottomBanner.css"; // External CSS for styling

const BottomBanner = () => {
    const handleCharityClick = () => {
        window.location.href = "/events"; // Redirect to charity events page
    };

    return (
        <div className="bottom-banner">
            <div className="bottom-banner-content">
                <h2 className="bottom-banner-title">Support Our Charity Events</h2>
                <p className="bottom-banner-subtitle">
                    Join us in making a difference. Explore our charity events and contribute to the cause.
                </p>
                <p className="bottom-banner-subtitle">
                    You can also earn heartbeats by attending our charity events and hopefully exchange concert tickets.
                </p>
                <button className="bottom-banner-button" onClick={handleCharityClick}>
                    Learn More →
                </button>
            </div>
        </div>
    );
};

export default BottomBanner;