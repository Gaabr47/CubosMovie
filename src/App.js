import { BrowserRouter } from "react-router-dom";
import PostProvider from "./context";


import Routes from "./Routes";

function App() {
  return (  

   <PostProvider>
      <BrowserRouter>

        <Routes />
      
      </BrowserRouter>
      </PostProvider>
    

  );
}

export default App;
