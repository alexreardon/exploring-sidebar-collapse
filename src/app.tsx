import { createContext, use, useMemo, useState } from 'react';

import './app.css';

type TSidebarContextValue = { toggle: () => void };

const SidebarContext = createContext<TSidebarContextValue | null>(null)

function Topbar() {
  const sidebar = use(SidebarContext)
  return <div className="topbar"><button onClick={() => sidebar?.toggle()}>toggle</button></div>;
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
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const value: TSidebarContextValue = useMemo(() => {
    return {
      toggle: () => setIsSidebarOpen(value => !value)
    }
  }, []);

  return (
    <div className={`grid ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <SidebarContext.Provider value={value}>
      <Topbar />
      {isSidebarOpen ? <Sidebar /> : null}
      <Main />
      <Panel />
      </SidebarContext.Provider>
    </div>
  );
}
