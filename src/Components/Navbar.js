import logo from '../images/logo.png';
import './Navbar.css'
import {Link} from 'react-router-dom';
import React from 'react'

function Navbar() {
  // const [tog, settog] = useState('Pranav')
  // const toggle = ()=>{
  //    settog('Surendra')
  // }
  return (
    <div>
    <nav className= 'navbar background h-nav'>
        <div className="lefthalf">
            <img src={logo} alt="Logo" />
            <ul className='navlist v-class'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/course">Course</Link></li>
                <li><Link to="/contactus">Contact us</Link></li>
            </ul>
        </div>
        <div className='righthalf v-class'>
            <input type="text" placeholder='Search..'/>
            <button type="button" class="btn-sm btn-secondary">Submit</button>
        </div>
        <div className='burger'>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </nav>
</div>
  )
}

export default Navbar