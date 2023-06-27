import React, { useState } from "react";
import "./style.css";
import PopUpMessage from "./PopUpMessage";
import InputSection from "./InputSection";
import GridBox from "./puzzelCard";

const PuzzleGame = () => {
    const [popUp, setPopUp] = useState(false);
    const [box, setBox] = useState([1, 2]);
    const [gridValue, setGridValue] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [dragStart, setDragStart] = useState(null);

    const handleClosePopUp = () => {
        setPopUp(false);
    };

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleClickCreate = () => {
        const value = parseInt(inputValue);
        setGridValue(value);
        if (value > 0) {
            const factorial = value * value;
            const records = [];
            for (let i = 1; i <= factorial; i++) {
                records.push(i);
            }
            const sort = records.sort(() => Math.random() - 0.5);
            setBox(sort);
            setInputValue("")
        }
    };

    const handleDrag = (event) => {
        event.preventDefault();
        setDragStart(event.target.id);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        let duplicate = [...box];
        let draggedBoxDefaultValue = box[parseInt(dragStart)];
        let dropedBoxDefaultValue = box[parseInt(event.target.id)];
        duplicate[parseInt(dragStart)] = dropedBoxDefaultValue;
        duplicate[parseInt(event.target.id)] = draggedBoxDefaultValue;
        const isSorted = duplicate.every((v, i, a) => !i || a[i - 1] <= v);
        setPopUp(isSorted);
        setBox(duplicate);
    };

    return (
        <div className="container">
            <div className="content_main_div">
                <PopUpMessage showPopUp={popUp} handleClosePopUp={handleClosePopUp} />
                <InputSection
                    inputValue={inputValue}
                    handleChangeInput={handleChangeInput}
                    handleClickCreate={handleClickCreate}
                />
                <GridBox
                    gridValue={gridValue}
                    box={box}
                    handleDrop={handleDrop}
                    handleDragOver={handleDragOver}
                    handleDrag={handleDrag}
                />
            </div>
        </div>
    );
};

export default PuzzleGame;
