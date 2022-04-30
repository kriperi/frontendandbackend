import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function LoginLinks() {
  return (
    <>
      <div>
        <Link to={"/login"}>Login </Link>
      </div>
      <div>
        <Link to={"/register"}>register new user</Link>
      </div>
    </>
  );
}

function FrontPage() {
  const [user, setUser] = useState();
  useEffect(() => {
    async function check() {
      const res = await fetch("/api/login");
      setUser(await res.json());
    }
    check();
  }, []);

  return (
    <div>
      <h1>Movie Application</h1>
      {user ? <div>{user.fullName}</div> : <LoginLinks />}
    </div>
  );
}

function Login() {
  return <h1>Hello this is login</h1>;
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Application />);
