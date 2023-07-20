import React from 'react';
import { Link } from 'react-router-dom'

//get button name and path for evaery component
const Navbar = (props) => {

  return (
    <div className='navbar'>
      <h2>
        Albums List
      </h2>
      <div className='padding=left'>
        <Link to={props.path}><button>{props.page}</button></Link>
      </div>
    </div>
  )
}

export default Navbar;
