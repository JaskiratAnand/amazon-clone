import React, {
  createContext,
  useContext,
  userContext,
  useReducer,
} from "react";

//prepare ther datalayer
export const StateContext = createContext();
//wrap our app and provide the data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull info from data layer
export const useStateValue = () => useContext(StateContext);
