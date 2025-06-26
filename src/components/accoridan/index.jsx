import { React, useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    console.log(`Selected singleSelelction: ${getCurrentId}`);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    console.log(`Selected MultiSelelction : ${getCurrentId}`);
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
    console.log(selected, multiple);
  };

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="acc-content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="acc-content">{item.answer}</div>
                  )}
              {/* {selected === item.id || multiple.indexOf(item.id !== -1) ? (
                <div className="content">{item.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
