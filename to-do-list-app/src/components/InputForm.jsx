//eslint-disable-next-line
import React from "react";
import ToDoContext from "../context/ToDoContext";
import { useRef, useContext, useState } from "react";

const InputForm = () => {

    const [content,setContent] = useState("");
    const { inputToDo, lightTheme } = useContext(ToDoContext)
    const ref = useRef()

    const handleChange = (e) =>{
        setContent(e.target.value)
    }

  return (
    <div className="container">
        <div className={lightTheme ? "input-group-light" : "input-group-dark"}>
                <div  ref={ref} className={lightTheme ? "checkbox-light" : "checkbox-dark"} onClick={()=>inputToDo(ref, content)}>
                    <label className="checkmark visible"></label>
                </div>
                <input placeholder="Create a new todo..." onChange={handleChange} value={content} type="text" name="input-text" id="input-text" className={lightTheme ? "light-text" : ""}/>
        </div>
    </div>
  );
};

export default InputForm;
