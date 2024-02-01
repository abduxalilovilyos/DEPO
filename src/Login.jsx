import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  async function login()
  {
    console.log(name,password);
    let item ={name,password};
    let result = await fetch("https://Depoapi.pythonanywhere.com/api/v1/company/token",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate("/")

  }

  return (
    <div className="login">
      <form>
        <h1>КИРИШ</h1>
        <div className="input__inner">
        <label htmlFor="name">Фирма номини киритинг</label>  
      <input type="text" id="name"
      onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="input__inner">
        <label htmlFor="password">Паролни киритинг</label>
      <input type="password" id="password"
      onChange={(e)=>setPassword(e.target.value)}  />
        </div>
      <button 
      onClick={login}
      >Кириш</button>
      </form>
    </div>
  );
};

export default Login;
