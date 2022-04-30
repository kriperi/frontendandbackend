import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Movie Application</h1>

      <div>
        <Link to={"/login"}>Login </Link>
      </div>
      <div>
        <Link to={"/register"}>register new user</Link>
      </div>
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
