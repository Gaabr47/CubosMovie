import { BrowserRouter } from "react-router-dom";

import PostProvider from "./context";


import Routes from "./Routes";

function App() {
  return (  

    
      <BrowserRouter>
      <PostProvider>
        <Routes />
        </PostProvider>
      </BrowserRouter>
    

  );
}

export default App;
