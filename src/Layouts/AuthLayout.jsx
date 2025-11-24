import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'

const AuthLayout = () => {
    return (
      <div className="bg-base-100">
        <div className="max-w-7xl mx-auto min-h-screen ">
          <div className="m-6">
              <Logo></Logo>
          </div>
          <div className="flex justify-start items-start gap-4">
            <div className="flex-1 h-screen flex justify-center items-center">
              <Outlet></Outlet>
            </div>
            <div className="flex-1 h-screen flex justify-center items-center">
              <img src={authImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default AuthLayout;