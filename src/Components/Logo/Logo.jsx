import React from 'react';
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
      <Link to='/'>
        <div className="flex items-end">
          <img src={logoImg} alt="" />
          <h6 className="text-3xl font-extrabold -ms-2.5">ZapShift</h6>
        </div>
      </Link>
    );
};

export default Logo;