import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <BrowserRouter>
    {/* header */}
    <Header/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" exact element={<About/>}/>
      
      <Route path="/sign-up" exact element={<SignUp/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path="/profile" exact element={<Profile />}/>
      </Route>
      <Route path="/sign-in" exact element={<Signin />}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
