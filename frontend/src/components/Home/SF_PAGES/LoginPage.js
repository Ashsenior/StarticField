import React from 'react'
import './LoginPage.css'

export const LoginPage = () => {
  var x= document.getElementById("login");
  var y= document.getElementById("register");
  var z= document.getElementById("btn");

  function register(){
            x.style.left = "-400px";
            y.style.left = "50px";
            z.style.left = "110px";
        };

 function login(){
            x.style.left = "50px";
            y.style.left = "450px";
            z.style.left = "0";
        };

 function enable(){
            var check = document.getElementById("check");
            var submit_btn = document.getElementById("submit_btn");
            if(check.checked){
                submit_btn.removeAttribute("disabled");   
            }   else{
                submit_btn.disabled = "true";
            } }
       
  return (
    <>
    <div className="hero">
    <div className="form-box">
        <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onclick="login()">Log In</button>
            <button type="button" className="toggle-btn" onclick="register()">Register</button>
        </div>
        <form id="login" className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="password" className="input-field" placeholder="Enter Password" required />
            <input type="checkbox" className="check-box" /><span>Remember me</span>
            <button type="submit" className="submit-btn">Log In</button>
        </form>
        <form id="register" className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="email" className="input-field" placeholder="Email Id" required />
            <input type="password" className="input-field" placeholder="Enter Password" required />
            <input type="checkbox" className="check-box" id="check" onclick="enable()"/><span>I agree to the terms and conditions</span>
            <button type="submit" className="submit-btn" id="submit_btn" disabled="true">Register</button>
        </form>
    </div>
</div>

    </>
  )
}
