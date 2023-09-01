import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const idInput = (e) => {
    setId(e.target.value);
  };
  const pwInput = (e) => {
    setPw(e.target.value);
  };

  const login = async () => {
    const data = { email: id, password: pw };

    try {
      const response = await axios.post(
        'https://vercel-express-pied-kappa.vercel.app/users/signin',
        data
      );
      console.log(response.data);

      if (!response.data.isError) {
        localStorage.setItem('login-token', response.data.token);
        navigate('/home'); // 리다이렉션을 이곳에서 수행
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <body
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <h2>로그인</h2>
      <input type='text' placeholder='이메일' value={id} onChange={idInput} />
      <br />
      <input
        type='password'
        placeholder='비밀번호'
        value={pw}
        onChange={pwInput}
      />
      <br />
      <button onClick={login}>로그인</button>
      <br />
      <Link to='/'>
        <button>회원가입 하러가기</button>
      </Link>
    </body>
  );
}
