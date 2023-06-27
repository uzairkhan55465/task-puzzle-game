import React from "react";

const PopUpMessage = ({ showPopUp, handleClosePopUp }) => {
    return (
        <div
            className="pop_up_message_container"
            onClick={handleClosePopUp}
        >
            <div className=" pop_up_width">
                <div className=" pop_up_message_div ">
                    {showPopUp ? <h1>Welcome to the Team :)</h1> : ""}
                </div>
            </div>
        </div>
    );
};

export default PopUpMessage;
