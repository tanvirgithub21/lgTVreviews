import { Route, Routes } from "react-router-dom";
import Blog from "./Component/Blog/Blog.jsx";
import About from "./Component/About/About.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";
import HomePage from "./Component/HomePage/HomePage.jsx";
import NavBar from "./Component/NavBar/NavBar.jsx";
import NotFound from "./Component/NotFound/NotFound.jsx";
import Reviews from "./Component/Reviews/Reviews.jsx";
import Login from "./Component/Login/Login.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
