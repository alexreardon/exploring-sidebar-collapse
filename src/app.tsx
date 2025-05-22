import { useState } from 'react';

import './app.css';

function Topbar() {
  return <div className="topbar">top bar</div>;
}

function Sidebar() {
  return <div className="sidebar">side bar</div>;
}

function Main() {
  return <div className="main">main</div>;
}

function Panel() {
  return <div className="panel">panel</div>;
}

export function App() {
  return (
    <div className="grid">
      <Topbar />
      <Sidebar />
      <Main />
      <Panel />
    </div>
  );
}
