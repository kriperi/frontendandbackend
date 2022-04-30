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

async function fetchJSON(url) {
  const res = await fetch(url);
  return await res.json();
}

function useLoader(loadingFn) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    async function check() {
      setLoading(true);
      try {
        setData(await loadingFn());
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    check();
  }, []);

  return { loading, error, data };
}

function FrontPage() {
  const { loading, error, data } = useLoader(
    async () => await fetchJSON("/api/login")
  );

  const user = data;
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ border: "1px solid red", background: "pink" }}>
        An error occurred: {error.toString()}
      </div>
    );
  }

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
