'use client'

import "./Global.css";
import "./components/components-styles/SidebarNav.css";
import SidebarNav from "./components/SidebarNav";
import "./pageHome.css";
import LogSigAsk from "./components/LogSigAsk";
 
export default function Home() {
  return (
    <main className="container">
      <SidebarNav colorId="home"/>
      <div className="content">
        <LogSigAsk/>
      </div>
    </main>
  );
}
