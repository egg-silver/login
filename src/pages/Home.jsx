import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Home() {
  const token = localStorage.getItem('login-token');

  if (!token) {
    return <Navigate to='/login' />;
  }

  return (
    <body
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        fontSize: '30px',
      }}
    >
      로그인 성공👍
    </body>
  );
}
