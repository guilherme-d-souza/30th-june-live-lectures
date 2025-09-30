import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* 
        WHEN WE ARE DOING INTERNAL NAVIGATION
        WE USE LINK INSTEAD OF HREF
      */}
      {/* <a href="/login">Login</a> */}
      <Link to="/login">Login</Link>
    </div>
  );
}
