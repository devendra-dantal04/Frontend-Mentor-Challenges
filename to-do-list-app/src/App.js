import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ToDoItem from './components/ToDoItem';
import React, {useContext} from "react";
import ToDoContext from './context/ToDoContext';

function App() {
  const {lightTheme} = useContext(ToDoContext);
  return (<>
    <div className={lightTheme ? "light main-container mb-light" : "dark main-container mb-dark" }>
      <Header />
      <InputForm />
      <ToDoItem />
    </div>
    </>    
  );
} 


export default App;
