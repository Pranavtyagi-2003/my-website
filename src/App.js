import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
// import Intro from './Components/Intro';
import Aboutus from './Components/Aboutus';
import Courses from './Components/Courses';
import Contactus from './Components/Contactus';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Cards from './Components/Cards';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Skillbars from './Components/Skillbars'
function App() {
  return ( 
    <div className="App">
      <Router>
      <Routes>
          <Route path = "/" element = { <Navbar/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/" element = { <Slider/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/" element = { <Skillbars/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/" element = { <Cards/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/" element = { <Footer/>}></Route>
       </Routes>
      <Routes>
          <Route path = "/home" element = { <Navbar/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/home" element = { <Slider/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/home" element = { <Skillbars/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/home" element = { <Cards/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/home" element = { <Footer/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/about" element = { <Navbar/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/about" element = { <Aboutus/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/blog" element = {<Navbar/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/blog" element = {<Blog/> }></Route>
       </Routes>
       <Routes>
          <Route path = "/blog" element = { <Blog/>}></Route>
       </Routes>
       {/* <Routes>
          <Route path = "blog" element = { <Footer/>}></Route>
       </Routes> */}
       <Routes>
          <Route path = "/about" element = { <Footer/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/course" element = { <Navbar/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/course" element = { <Courses/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/course" element = { <Footer/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/contactus" element = { <Navbar/>}></Route>
       </Routes>
       <Routes>
          <Route path = "/contactus" element = { <Contactus/>}></Route>
       </Routes>
       {/* <Routes>
          <Route path = "/contactus" element = { <Footer/>}></Route>
       </Routes> */}
     </Router>
    </div>
  );
}

export default App;

