import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  const handleClick = () => alert("Button clicked!");
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home Page</h1>
      <Card />
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}
