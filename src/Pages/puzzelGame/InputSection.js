import React from "react";

const InputSection = ({ inputValue, handleChangeInput, handleClickCreate }) => {
    return (
        <div className="input_div">
            <label className="label-style">Enter Puzzle Size</label>
            <input
                placeholder="Enter Number"
                value={inputValue}
                onChange={handleChangeInput}
                type="number"
            />
            <div>
                <button className="Button-style" onClick={handleClickCreate}>
                    Create
                </button>
            </div>
        </div>
    );
};

export default InputSection;
