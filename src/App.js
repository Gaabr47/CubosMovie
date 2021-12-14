import { BrowserRouter } from "react-router-dom";

import PostProvider from "./context";


import Routes from "./Routes";

function App() {
  return (  

    
      <BrowserRouter>

        <Routes />
      
      </BrowserRouter>
    

  );
}

export default App;
