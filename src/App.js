import React, { useContext } from "react";

import { AppContext}  from "./ThemeContext";
import Button from "./Button";
import "./App.css";

function App() {
  const theme = useContext(AppContext);
  const darkMode = theme.state.darkMode;
  
const lang = useContext(AppContext);
const hindi = lang.state.hindi;
  return (
    <>
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <div className={`para ${darkMode ? "para-dark" : "para-light"}`}>
      <p > 
      {hindi?
        "Sometimes people find third-party books and video courses more helpful than the official documentation."
           :"कभी-कभी लोगों को तीसरे पक्ष की किताबें और वीडियो कोर्स आधिकारिक दस्तावेज़ीकरण से ज़्यादा मददगार लगते हैं।"}
           </p>
      </div>
      <Button />
    </div>
 
       </>
  );
}

export default App;