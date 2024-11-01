import React from "react";
import { useState } from "react";
import { UpdateUserName } from "../redux/loginReducers";
import { useDispatch, useSelector } from 'react-redux';
import store from "../redux/store";



function Loginscreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [iscorrect, setIscorrect] = useState(); 
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isEntered, setIsEntered] = useState(true); 
    const[isHovering,setIsHovering] = useState()

    const dispatch=useDispatch()

    const nm=useSelector((state)=>state.Login.LoginDetails)
  
    const changeLoginEnter =() => {
      setIsHovering(true)
    }
  
    const changeLoginLeave =() => {
      setIsHovering(false)
    }
  
    function handleUsername(event) {
      setUsername(event.target.value);
    }
  
    function handlePassword(event) {
      setPassword(event.target.value);
    }


  
    function onclickLogin() {
      setIsButtonClicked(true);
      dispatch(UpdateUserName(username))
  
      if (username === "" && password === "") {
        setIsEntered(false);
      } else {
        setIsEntered(true);
        if (username === "uda" && password === "1234") {
          setIscorrect(true);
        } else {
          setIscorrect(false);
        }
      }
  
      console.log("un: " + username);
      console.log("pw: " + password);
    }
  
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '100vw',
        height: '100vh',
        backgroundColor: '#171717',
      }}>
        {/* box */}
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: 'black', height: 500, width: 400, alignItems: "center", justifyContent: "center" }}>
          {/* logo */}
          <div style={{ marginTop: -50 }}>
            <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontWeight: '500', color: 'white', fontSize: 47 }}>
              Budget <span style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: '1000', fontSize: 49, marginTop: 21, color: 'yellowgreen', marginLeft: -17 }}>Code</span>
            </h1>
          </div>
  
          {/* username */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{color:"white", fontSize: 20}}>username : </h1> <input onChange={handleUsername} type="text" placeholder={nm} style={{ height: 20 , marginTop: 10, marginLeft: 10 }} />
          </div>
  
          {/* password */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{color:"white" , fontSize: 20}}>password : </h1> <input onChange={handlePassword} type="password" placeholder="Enter your password" style={{ height: 20 , marginTop: 10, marginLeft: 10 }} />
          </div>
  
          {/* submit */}
          <div style={{ backgroundColor: 'black' , marginTop : 60}}>
    <button 
    onMouseEnter={changeLoginEnter}
    onMouseLeave={changeLoginLeave}
      onClick={onclickLogin}
      style={{
        cursor: "pointer",
        backgroundColor: '#000040',
        borderRadius: 80,
        width: 80,
        height: 35,
        boxShadow: isHovering ? '0 0 10px #00ffff, 0 0 20px #00008B, 0 0 30px #00008B, 0 0 40px #00ffff' : '',
        transition: 'box-shadow 0.3s ease',
        
      }}
    >
      <span style={{ color: "yellowgreen", fontWeight: "bold" }}>Log In</span>
    </button>
  </div>
  
        </div>
  
        {/* Conditional rendering for login status */}
        {isButtonClicked && (
          <div>
            {!isEntered && <h1 style={{color:"red", fontSize: 20}}>Please enter username and password*</h1>}
            {isEntered && iscorrect && <h1 style={{color:"yellowgreen",fontSize: 20}}>Successfully Logged In</h1>}
            {isEntered && iscorrect === false && <h1 style={{color:"red",fontSize: 20}}>Invalid Login!</h1>}
          </div>
        )}
      </div>
    );
  }
  
  export default Loginscreen;
  