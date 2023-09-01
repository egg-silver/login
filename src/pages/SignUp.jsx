import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [pwd, SetPwd] = useState('');
  const [pwdCheck, SetPwdCheck] = useState('');

  const inputId = (e) => {
    setId(e.target.value);
  };
  const inputName = (e) => {
    setName(e.target.value);
  };
  const inputPwd = (e) => {
    SetPwd(e.target.value);
  };
  const inputPwdCheck = (e) => {
    SetPwdCheck(e.target.value);
  };
  const navigate = useNavigate();

  const register = async () => {
    const userInfo = { email: id, password: pwd };
    if (pwd !== pwdCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      const response = await axios.post(
        'https://vercel-express-pied-kappa.vercel.app/users/signup',
        userInfo
      );
      console.log(response.data);
      if (!response.data.isError) {
        return navigate('/login');
      }
    } catch (error) {
      console.error(error);
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
      <h2>회원가입</h2>
      <input type='text' placeholder='이메일' value={id} onChange={inputId} />
      <br />
      <input type='text' placeholder='이름' value={name} onChange={inputName} />
      <br />
      <input
        type='password'
        placeholder='비밀번호'
        value={pwd}
        onChange={inputPwd}
      />
      <br />
      <input
        type='password'
        placeholder='비밀번호 확인'
        value={pwdCheck}
        onChange={inputPwdCheck}
      />
      <br />
      <button onClick={register}>작성완료</button>
      <br />

      <Link to='/login'>
        <button>로그인 페이지로 이동</button>
      </Link>

      <br />
    </body>
  );
}
