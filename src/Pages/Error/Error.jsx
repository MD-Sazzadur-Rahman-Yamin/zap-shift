import React from 'react';
import errorImg from '../../assets/error.svg'
import { Link } from 'react-router';

const Error = () => {
    return (
      <div className="bg-base-100 h-screen mt-8 rounded-4xl flex justify-center items-center flex-col">
        <img src={errorImg} alt="error" />
        <Link to="/">
          <button className="btn-primary">
            Go Home
          </button>
        </Link>
      </div>
    );
};

export default Error;