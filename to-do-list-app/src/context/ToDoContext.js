import { createContext, useState} from "react";
import {v4 as uuid} from "uuid";
import listData from "../data/ToDoListData";
const ToDoContext = createContext();



export const ToDoProvider= ({children}) => {
    const [items,setItems] = useState(listData);
    const [lightTheme,setLightTheme] = useState(true);

    const removeItem = (id) =>{
        let newItems = items.filter((item) => item.id !== id)
        setItems(newItems);
    }

    
    const inputToDo = (ref,content) =>{

        // console.log(content)
        if(content !== ""){
            ref.current.classList.add('change-background');

            setItems([{id : uuid(), content : content, status : "Pending"},...items]);

            setTimeout(() => {
                ref.current.classList.remove('change-background')
            }, 200);
           
        }
       
    }


    
    const handleClick = (e,olditem) =>{
        // console.log(e.target)
        // console.log(e)
        // e.preventDefault()

        let newArray = items.map((item)=>{
            if(item.id === olditem.id){
                if(item.status === "Pending")
                    return {...item,status : "Complete"}
                else
                    return {...item,status : "Pending"}
            }else{
                return item
            }
        })

        setItems(newArray)

    }




    return <ToDoContext.Provider value={{items, setItems, inputToDo, removeItem, handleClick, lightTheme, setLightTheme}}>
        {children}
    </ToDoContext.Provider>
}

export default ToDoContext;