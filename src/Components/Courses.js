import React, { Component } from 'react'
import './Courses.css';
import img1 from '../images/1.jpg';
import img2 from '../images/2.png';
import img3 from '../images/3.jpg';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/8.png';
import img12 from '../images/11.png';
import img13 from '../images/12.png';
import img14 from '../images/13.png';
import img15 from '../images/14.png';
import img16 from '../images/15.png';

import {Link} from 'react-router-dom';
export class Courses extends Component {
  render() {
    return (
      <div className='main'>
        <div className='heading1'><p><b>Courses</b></p></div>
        <div className='align1'>
          <div className='cards1 grow1 grow1'>
           <div>
           <img src={img1} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>OOPs Concept For Beginners</p>
           </div>
          <Link to = "/course"> <button type="button" class="btn btn-secondary">Full Course</button></Link>
          </div>
          <div className='cards1 grow1 grow1'>
          <div>
           <img src={img2} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Function Calling Methods</p>
           </div>
           <Link to = "/course"> <button type="button" class="btn btn-secondary">Full Course</button></Link>
          </div>
          <div className='cards1 grow1 grow1'>
          <div>
           <img src={img3} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Programming in C++ Full Course</p>
           </div>
           <Link to = "/course"> <button type="button" class="btn btn-secondary">Full Course</button></Link>
          </div>
        </div>
        <div className='align1'>
          <div className='cards1 grow1 grow1'>
           <div>
           <img src={img8} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Introduction To Class In Hindi</p>
           </div>
          <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          <div className='cards1 grow1 grow1'>
          <div>
           <img src={img7} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Data Member And Member Function</p>
           </div>
           <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          <div className='cards1 grow1 grow1'>
          <div>
           <img src={img10} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Introduction To Constructor</p>
           </div>
           <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
        </div>
        <div className='align1'>
          <div className='cards1 grow1'>
           <div>
           <img src={img5} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Default Constructor In C++</p>
           </div>
          <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          <div className='cards1 grow1'>
          <div>
           <img src={img6} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Parameterized Constructor In C++</p>
           </div>
           <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          <div className='cards1 grow1'>
          <div>
           <img src={img4} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Copy Constructor In C++</p>
           </div>
           <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
        </div>
        <div className='align1'>
          <div className='cards1 grow1'>
           <div>
           <img src={img11} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Virtual Function In Hindi</p>
           </div>
          <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          <div className='cards1 grow1'>
          <div>
           <img src={img12} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Call By Value In Hindi</p>
           </div>
           <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          <div className='cards1 grow1'>
          <div>
           <img src={img13} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Programming in C++ Full Course</p>
           </div>
           <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
        </div>
        <div className='align1'>
          <div className='cards1 grow1'>
           <div>
           <img src={img14} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Call By Pointer/Address In Hindi</p>
           </div>
          <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          <div className='cards1 grow1'>
           <div>
           <img src={img15} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Introduction Video</p>
           </div>
          <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          <div className='cards1 grow1'>
           <div>
           <img src={img16} alt="" />
           </div>
           <div>
            <p>Free Courses</p>
           </div>
           <div>
            <p className='p1'>Scientific Calculator Using Python</p>
           </div>
          <Link to = "/course"> <button type="button" class="btn btn-secondary">Start Watching</button></Link>
          </div>
          </div>
      </div>
    )
  }
}

export default Courses

