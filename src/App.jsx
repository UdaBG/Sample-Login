import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Loginscreen from "./Screens/Loginscreen";

function App(){

  return(
   
      <Provider store = {store}>
      <Loginscreen />
       </Provider>
  )


}



export default App;
