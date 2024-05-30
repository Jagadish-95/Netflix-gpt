import React from "react";
import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./Utils/appStore";


function App() {
  return (
    <div >
     {/* <React.StrictMode> */}
     <Provider store={appStore}>
      <Body/>
      </Provider>
      {/* </React.StrictMode> */}
     

    </div>
  );
}

export default App;
