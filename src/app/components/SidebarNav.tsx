import { url } from "inspector";
import "../Global.css";
import "./components-styles/SidebarNav.css";
import Logo from "../assets/Logo.png";

import { CircleX, Menu } from "lucide-react";
import { User } from "lucide-react";
import { Settings } from "lucide-react";
import { CircleAlert } from "lucide-react";
import { LayoutTemplate } from "lucide-react";
import { useState } from "react";
import SandwichMenu from "./components-buttons/SandwichMenu";
 
type sidebarnavType = {
  colorId: string
}

export default function SidebarNav(props: sidebarnavType) {

  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  function verificarMenu(){
    if(visibleMenu){
      setVisibleMenu(false);
    } else {
      setVisibleMenu(true);
    }
  }


  switch (props.colorId) {
     
      case "profile":

      return (
        <>
        <aside className="lateral-bar ">
          <div className="menu">
            <a href="../" id="home-menu">
                <img src={Logo.src} />
            </a>
          </div>

          <button className="tripleMenu" onClick={verificarMenu}>
            {visibleMenu ? (<CircleX className="closeIcon"/>) : (<SandwichMenu />)}
          </button>

          
          <div className="container-itens-bar">
            <a href="../perfil" id="perfil" style={{color: 'rgb(24, 149, 217)'}} className="itens-bar">
              <User></User>
              <p>Perfil</p>
            </a>
    
            <a href="../catalogo" id="catalogo" className="itens-bar">
              <LayoutTemplate></LayoutTemplate>
              <p>Catálogo</p>
            </a>
    
            <a href="../sobre" id="sobre" className="itens-bar">
              <CircleAlert></CircleAlert>
              <p>Sobre</p>
            </a>
    
            <a href="../configuracoes" id="settings" className="itens-bar">
              <Settings></Settings>
              <p>Configurações</p>
            </a>
          </div>
        </aside>

        {visibleMenu &&
          <div className="container-itens-bar-menu">
          <a href="../perfil" id="perfilMenu" style={{color: 'rgb(57, 181, 248)'}} className="itens-bar">
            <User></User>
            <p>Perfil</p>
          </a>
  
          <a href="../catalogo" id="catalogoMenu" className="itens-bar">
            <LayoutTemplate></LayoutTemplate>
            <p>Catálogo</p>
          </a>
  
          <a href="../sobre" id="sobreMenu" className="itens-bar">
            <CircleAlert></CircleAlert>
            <p>Sobre</p>
          </a>
  
          <a href="../configuracoes" id="settingsMenu" className="itens-bar">
            <Settings></Settings>
            <p>Configurações</p>
          </a>
        </div>
        }
      </>   
      );

      break;

      case "catalog":
        return (
          <>
        <aside className="lateral-bar ">
          <div className="menu">
            <a href="../" id="home-menu">
                <img src={Logo.src} />
            </a>
          </div>

          <button className="tripleMenu" onClick={verificarMenu}>
            {visibleMenu ? (<CircleX className="closeIcon"/>) : (<SandwichMenu />)}
          </button>

          
          <div className="container-itens-bar">
            <a href="../perfil" id="perfil" className="itens-bar">
              <User></User>
              <p>Perfil</p>
            </a>
    
            <a href="../catalogo" id="catalogo" style={{color: 'rgb(57, 181, 248)'}} className="itens-bar">
              <LayoutTemplate></LayoutTemplate>
              <p>Catálogo</p>
            </a>
    
            <a href="../sobre" id="sobre" className="itens-bar">
              <CircleAlert></CircleAlert>
              <p>Sobre</p>
            </a>
    
            <a href="../configuracoes" id="settings" className="itens-bar">
              <Settings></Settings>
              <p>Configurações</p>
            </a>
          </div>
        </aside>

        {visibleMenu &&
          <div className="container-itens-bar-menu">
          <a href="../perfil" id="perfilMenu" className="itens-bar">
            <User></User>
            <p>Perfil</p>
          </a>
  
          <a href="../catalogo" id="catalogoMenu" style={{color: 'rgb(57, 181, 248)'}} className="itens-bar">
            <LayoutTemplate></LayoutTemplate>
            <p>Catálogo</p>
          </a>
  
          <a href="../sobre" id="sobreMenu" className="itens-bar">
            <CircleAlert></CircleAlert>
            <p>Sobre</p>
          </a>
  
          <a href="../configuracoes" id="settingsMenu" className="itens-bar">
            <Settings></Settings>
            <p>Configurações</p>
          </a>
        </div>
        }
      </>
        );

        break;

        case "about":

        return (
          <>
        <aside className="lateral-bar ">
          <div className="menu">
            <a href="../" id="home-menu">
                <img src={Logo.src} />
            </a>
          </div>

          <button className="tripleMenu" onClick={verificarMenu}>
            {visibleMenu ? (<CircleX className="closeIcon"/>) : (<SandwichMenu />)}
          </button>

          
          <div className="container-itens-bar">
            <a href="../perfil" id="perfil" className="itens-bar">
              <User></User>
              <p>Perfil</p>
            </a>
    
            <a href="../catalogo" id="catalogo" className="itens-bar">
              <LayoutTemplate></LayoutTemplate>
              <p>Catálogo</p>
            </a>
    
            <a href="../sobre" id="sobre" style={{color: 'rgb(57, 181, 248)'}} className="itens-bar">
              <CircleAlert></CircleAlert>
              <p>Sobre</p>
            </a>
    
            <a href="../configuracoes" id="settings" className="itens-bar">
              <Settings></Settings>
              <p>Configurações</p>
            </a>
          </div>
        </aside>

        {visibleMenu &&
          <div className="container-itens-bar-menu">
          <a href="../perfil" id="perfilMenu" className="itens-bar">
            <User></User>
            <p>Perfil</p>
          </a>
  
          <a href="../catalogo" id="catalogo" className="itens-bar">
            <LayoutTemplate></LayoutTemplate>
            <p>Catálogo</p>
          </a>
  
          <a href="../sobre" id="sobreMenu" style={{color: 'rgb(57, 181, 248)'}} className="itens-bar">
            <CircleAlert></CircleAlert>
            <p>Sobre</p>
          </a>
  
          <a href="../configuracoes" id="settingsMenu" className="itens-bar">
            <Settings></Settings>
            <p>Configurações</p>
          </a>
        </div>
        }
      </>
        );

        break;

        case "config":

        return (
          <>
        <aside className="lateral-bar ">
          <div className="menu">
            <a href="../" id="home-menu">
                <img src={Logo.src} />
            </a>
          </div>

          <button className="tripleMenu" onClick={verificarMenu}>
            {visibleMenu ? (<CircleX className="closeIcon"/>) : (<SandwichMenu />)}
          </button>

          
          <div className="container-itens-bar">
            <a href="../perfil" id="perfil" className="itens-bar">
              <User></User>
              <p>Perfil</p>
            </a>
    
            <a href="../catalogo" id="catalogo" className="itens-bar">
              <LayoutTemplate></LayoutTemplate>
              <p>Catálogo</p>
            </a>
    
            <a href="../sobre" id="sobre" className="itens-bar">
              <CircleAlert></CircleAlert>
              <p>Sobre</p>
            </a>
    
            <a href="../configuracoes" id="settings" style={{color: 'rgb(57, 181, 248)'}} className="itens-bar">
              <Settings></Settings>
              <p>Configurações</p>
            </a>
          </div>
        </aside>

        {visibleMenu &&
          <div className="container-itens-bar-menu">
          <a href="../perfil" id="perfilMenu" className="itens-bar">
            <User></User>
            <p>Perfil</p>
          </a>
  
          <a href="../catalogo" id="catalogoMenu" className="itens-bar">
            <LayoutTemplate></LayoutTemplate>
            <p>Catálogo</p>
          </a>
  
          <a href="../sobre" id="sobreMenu" className="itens-bar">
            <CircleAlert></CircleAlert>
            <p>Sobre</p>
          </a>
  
          <a href="../configuracoes" id="settingsMenu" style={{color: 'rgb(57, 181, 248)'}} className="itens-bar">
            <Settings></Settings>
            <p>Configurações</p>
          </a>
        </div>
        }
      </>
        );

        break;

      default:
        return (
          <>
        <aside className="lateral-bar ">
          <div className="menu">
            <a href="../" id="home-menu">
                <img src={Logo.src} />
            </a>
          </div>

          <button className="tripleMenu" onClick={verificarMenu}>
            {visibleMenu ? (<CircleX className="closeIcon"/>) : (<SandwichMenu />)}
          </button>

          
          <div className="container-itens-bar">
            <a href="../perfil" id="perfil" className="itens-bar">
              <User></User>
              <p>Perfil</p>
            </a>
    
            <a href="../catalogo" id="catalogo" className="itens-bar">
              <LayoutTemplate></LayoutTemplate>
              <p>Catálogo</p>
            </a>
    
            <a href="../sobre" id="sobre" className="itens-bar">
              <CircleAlert></CircleAlert>
              <p>Sobre</p>
            </a>
    
            <a href="../configuracoes" id="settings" className="itens-bar">
              <Settings></Settings>
              <p>Configurações</p>
            </a>
          </div>
        </aside>

        {visibleMenu &&
          <div className="container-itens-bar-menu">
          <a href="../perfil" id="perfilMenu" className="itens-bar">
            <User></User>
            <p>Perfil</p>
          </a>
  
          <a href="../catalogo" id="catalogoMenu" className="itens-bar">
            <LayoutTemplate></LayoutTemplate>
            <p>Catálogo</p>
          </a>
  
          <a href="../sobre" id="sobreMenu" className="itens-bar">
            <CircleAlert></CircleAlert>
            <p>Sobre</p>
          </a>
  
          <a href="../configuracoes" id="settingsMenu" className="itens-bar">
            <Settings></Settings>
            <p>Configurações</p>
          </a>
        </div>
        }
      </>
    );

      break;
  }
}