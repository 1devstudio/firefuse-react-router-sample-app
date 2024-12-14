import React from 'react';
import {NavLink} from "react-router";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <NavLink to="/dashboard" end>
        Go to Dashboard
      </NavLink>
    </div>
  );
};

export default Home;
