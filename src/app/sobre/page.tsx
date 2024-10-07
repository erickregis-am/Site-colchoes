'use client'

import SidebarNav from "../components/SidebarNav";
import SobreContent from "../components/SobreContent";
import "../components/components-styles/SidebarNav.css";
import "./page.css";

export default function Sobre(){
    return (
        <main className="container">
            <SidebarNav colorId="about"/>
            <div className="content">
                <SobreContent />
            </div>
        </main>
    );
}
