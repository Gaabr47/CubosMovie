import { BrowserRouter } from "react-router-dom";
import Nav from './components/nav'
import PostProvider from "./context";


import Home from './home';
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
