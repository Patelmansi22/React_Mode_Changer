
import React, { useContext } from "react";
import { AppContext}  from "./ThemeContext";

import "./App.css";
const  Button =()=>{
    const theme = useContext(AppContext);
    // console.log(theme,"theme");

  const darkMode = theme.state.darkMode;
//   console.log(darkMode,"darkMode")

const lang = useContext(AppContext);

const hindi = lang.state.hindi;

console.log(hindi,"hindi")

  const onClick =()=>{
    if (darkMode){
        theme.dispatch({type:'LIGHTMODE'});
    }else{
        theme.dispatch({type:'DARKMODE'});
    }
  }
  const onlang =()=>{
    if (hindi){
        lang.dispatch({type:'ENGLISH'});
    }else{
        lang.dispatch({type:'HINDI'});
    }
  }
  return(
    <>
   
    <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
  </button>
  <button className={`btn ${hindi ? "btn-dark" : "btn-light"}`} onClick={onlang}>
  language
  </button>
  </>
  );
}
export default Button