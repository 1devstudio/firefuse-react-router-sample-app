import React from 'react';
import {useAuth} from "@firefuse/react";

const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Dashboard Authenticated Page</h1>
      <p>This is the Dashboard Page that requires authentication.</p>
      <button onClick={() => logout({ redirectUrl: window.location.origin })}>Logout</button>
    </div>
  );
};

export default Dashboard;
