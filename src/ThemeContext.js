import { createContext,useReducer } from "react";

export const AppContext = createContext();
const initialState = { darkMode: false,hindi: false   };

const themeReducer = (state, action) => {

    switch (action.type) {
      case "LIGHTMODE":
        return { darkMode: false };
        
      case "DARKMODE":
        return { darkMode: true };

        case "ENGLISH":
      return { hindi: false };
      
    case "HINDI":
      return { hindi: true };
      default:
        return state;
    }
  };



  export function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
    
  }