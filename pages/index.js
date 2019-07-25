import React, { useState } from "react";
const InputElement = () => {
  const [inputValue, setInputValue] = useState("");
  const [historyList, setHistoryList] = useState([]);
  return (
    <div>
      <input
        placeholder="enter"
        onChange={e => {
          setInputValue(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
      />
      {inputValue}
      <ul>
        {historyList.map(history => {
          return <li>{history}</li>;
        })}
      </ul>
    </div>
  );
};
export default InputElement;
