import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", backgroundColor: "#ddd" }}>
      <Link to="/">Home</Link>
      <Link to="/apilist">API List</Link>
      <Link to="/tasks">Tasks</Link>
    </nav>
  );
}
