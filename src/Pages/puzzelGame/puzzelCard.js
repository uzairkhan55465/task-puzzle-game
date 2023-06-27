import React from "react";

const PuzzelCard = ({ gridValue, box, handleDrop, handleDragOver, handleDrag }) => {
    return (
        <div className="grid_box_main_div">
            <div
                className="grid_container"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${gridValue}, auto)`,
                }}
            >
                {box?.map((single, index) => (
                    <div
                        className="grid_items"
                        key={index}
                        id={index}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDrag={handleDrag}
                        draggable="true"
                    >
                        {single}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PuzzelCard;
