//eslint-disable-next-line
import React, { useState, useRef, useContext } from "react";
import ToDoContext from "../context/ToDoContext";

const ToDoItem = () => {
    const {items, lightTheme, removeItem, handleClick} = useContext(ToDoContext);
    const [currentState, setCurrentState] = useState("all")

    

    const handleState = (e) =>{
        e.preventDefault();
        setCurrentState(e.target.name)
    }


   
  return (
    <div className="container">
        <div key={items[0].id} className="container-list">
        {currentState === "all" ? (
             items.map((item)=>{
                return(
                <div key={item.id} className={lightTheme ? "input-group-light-item" : "input-group-dark-item"}>
                    <div onClick={(e)=>handleClick(e,item)} className={item.status === "Complete" ? lightTheme ? "checkbox-light change-background" : "checkbox-dark change-background" : lightTheme ? "checkbox-light" : "checkbox-dark"}>
                        {item.status === "Complete" ? <input onChange={()=>{}} onClick={(e)=>handleClick(e,item)} type="checkbox" className="checked"/> : <input onChange={()=>{}} onClick={(e)=>handleClick(e,item)} type="checkbox"/>}
                        <label onClick={(e)=>handleClick(e,item)}  className="checkmark"></label>
                    </div>
                    <p className={item.status === "Complete" ? lightTheme ? "item-text-light completed-light" : "item-text-dark completed-dark" : lightTheme ? "item-text-light":"item-text-dark"} >{item.content}</p>
                    <i onClick={()=>removeItem(item.id)} className={`fa-solid fa-xmark cross-icon ${lightTheme && "icon-light"}`}></i>
                </div>)

           
            })
        ): 
        currentState === "active" ? (items.map((item)=>{
            if(item.status ==="Pending"){
                return(
                    <div key={item.id} className={lightTheme ? "input-group-light-item" : "input-group-dark-item"}>
                        <div onClick={(e)=>handleClick(e,item)} className={item.status === "Complete" ? lightTheme ? "checkbox-light change-background" : "checkbox-dark change-background" : lightTheme ? "checkbox-light" : "checkbox-dark"}>
                            <input onChange={()=>{}} onClick={(e)=>handleClick(e,item)} type="checkbox"/>
                            <label onClick={(e)=>handleClick(e,item)}  className="checkmark"></label>
                        </div>
                        <p className={item.status === "Complete" ? lightTheme ? "item-text-light completed-light" : "item-text-dark completed-dark" : lightTheme ? "item-text-light":"item-text-dark"} >{item.content}</p>
                        <i onClick={()=>removeItem(item.id)} className={`fa-solid fa-xmark cross-icon ${lightTheme && "icon-light"}`}></i>
                    </div>)

                   
            }
            return null
        })) : (items.map((item)=>{
            if(item.status ==="Complete"){
                return(
                    <div key={item.id} className={lightTheme ? "input-group-light-item" : "input-group-dark-item"}>
                        <div onClick={(e)=>handleClick(e,item)} className={item.status === "Complete" ? lightTheme ? "checkbox-light change-background" : "checkbox-dark change-background" : lightTheme ? "checkbox-light" : "checkbox-dark"}>
                            <input onChange={()=>{}} onClick={(e)=>handleClick(e,item)} type="checkbox" className={"checked"} />
                            <label onClick={(e)=>handleClick(e,item)}  className="checkmark"></label>
                        </div>
                        <p className={item.status === "Complete" ? lightTheme ? "item-text-light completed-light" : "item-text-dark completed-dark" : lightTheme ? "item-text-light":"item-text-dark"} >{item.content}</p>
                        <i onClick={()=>removeItem(item.id)} className={`fa-solid fa-xmark cross-icon ${lightTheme && "icon-light"}`}></i>
                    </div>)
                    
            }
            return null
        }))
    }
       

        <div className={lightTheme ? "input-group-light-item border-p" : "input-group-dark-item border-p"}>
                <div className="item-count">{items.length} items left</div>
                <div className="state">
                    <a href={"/"} name="all" onClick={handleState} className={currentState === "all" ? "activated" : ""}>All</a>
                    <a href={"/"} name="active" onClick={handleState} className={currentState === "active" ? "activated" : ""}>Active</a>
                    <a href={"/"} name="complete" onClick={handleState} className={currentState === "complete" ? "activated" : ""}> Completed </a>
                </div>
                <div className="clear-completed">Clear Completed</div>
        </div>

        <div className={lightTheme ? "mb-input-group-light-item mb-component" : "mb-input-group-dark-item mb-component"}>
                <div className="state mb-state">
                    <a href={"/"} name="all" onClick={handleState} className={currentState === "all" ? "activated mb-anchor" : "mb-anchor"}>All</a>
                    <a href={"/"} name="active" onClick={handleState} className={currentState === "active" ? "activated mb-anchor" : "mb-anchor"}>Active</a>
                    <a href={"/"} name="complete" onClick={handleState} className={currentState === "complete" ? "activated mb-anchor" : "mb-anchor"}> Completed </a>
                </div>
        </div>
        </div>
    </div>
  );
};
export default ToDoItem;
