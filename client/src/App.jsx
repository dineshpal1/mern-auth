import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
    {/* header */}
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/sign-in" element={<Signin />}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
