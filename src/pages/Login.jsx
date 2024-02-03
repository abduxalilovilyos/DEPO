import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../MyContext";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setAccess } = useContext(MyContext);

  const navigate = useNavigate();

  async function login() {
    const item = { name, password };
    const res = await fetch(
      "https://Depoapi.pythonanywhere.com/api/v1/company/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const data = await res.json();
    setAccess(data.access);
    navigate("/");
  }

  // har safar userData o'zgarganida, uni sessionStorage ga saqlayapman
  useEffect(() => {
    if (name || password) {
      const userDataString = JSON.stringify(name,password);
      sessionStorage.setItem("userdata", userDataString);
    }
  }, [name,password]);


// har bitta refresh dan keyin, uni sessionStorage dan olib, qaytarib setUserData ga saqlab qo'yayapman
  useEffect(() => {
    const value = sessionStorage.getItem("userdata");

    if (value) {
      const parsedValue = value ? JSON.parse(value) : { name: "", password: "" };
      setAccess(parsedValue);
    }
  }, []);

  return (
    <div className="login">
      <form>
        <h1>КИРИШ</h1>
        <div className="input__inner">
          <label htmlFor="name">Фирма номини киритинг</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input__inner">
          <label htmlFor="password">Паролни киритинг</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={login} type="button">
          Кириш
        </button>
      </form>
    </div>
  );
};

export default Login;
