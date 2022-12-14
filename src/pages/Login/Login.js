import React, {useState, useRef} from 'react';
import './Login.scss'
import { Link } from 'react-router-dom';


function Login() {
//  const [idValue, setIdValue] = useState("");
//  const [pwValue, setPwValue] = useState("");

const id = useRef();
const pw = useRef();
 const [isValid, setIsValid] = useState(false);

 const handleInput = () => { 
  id.current.value.includes("@") && pw.current.value.length >= 5
    ? setIsValid(true) : setIsValid(false);
 };

//  const handlePwInput = (e) => {
//   setPwValue(e.target.value);
//   idValue.includes("@") && pwValue.length >= 5
//     ? setIsValid(true) : setIsValid(false);
//  };

  return (
    <body className="Login"> 
      <div className="container">
        <div className="Login">
            <span className="logo-text">justgram</span>
        </div>
          <div className="form-wrap">
            <div>
              <input className="id-input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={handleInput} ref={id}/>             
            </div>
            <div>
              <input className="pw-input" type="password" placeholder="비밀번호" onChange={handleInput} ref={pw}/>
            </div>
            <div>
              <Link to='/main'><button className="login-button" style={{backgroundColor: isValid ? "#000cf6" : "#0095f6"}}>로그인</button></Link>              
            </div>
            <div className="Login">
              <a className="find-password">
              비밀번호를 잊으셨나요?</a>
            </div>
        </div>
      </div>
    </body>  
  );
}

export default Login;