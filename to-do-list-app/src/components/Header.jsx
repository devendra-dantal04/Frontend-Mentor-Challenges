import React from "react";
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs";
import { useContext } from "react";
import ToDoContext from "../context/ToDoContext";


const Header = () => {
  const {lightTheme, setLightTheme} = useContext(ToDoContext);
  
  const changeTheme = () =>{
    setLightTheme(!lightTheme);
  }

  return (
    <div className="container">
        <div className="logo">
            <h1 className="todo-heading">T O D O</h1>
            {lightTheme ? <BsFillMoonFill className = "theme-logo" onClick={changeTheme}/> : <BsFillSunFill onClick={changeTheme} className = "theme-logo" />}
        </div>
    </div>
  );
};

export default Header;
