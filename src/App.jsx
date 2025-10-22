import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ApiList from './pages/ApiList';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="api" element={<ApiList />} />
      </Route>
    </Routes>
  );
}