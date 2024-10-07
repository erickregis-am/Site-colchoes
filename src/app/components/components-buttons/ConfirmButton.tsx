import { ShoppingCart } from "lucide-react";
import "../../Global.css";
import "../components-styles/ConfirmButton.css";

type typeConfirmButton = {
    text: string,
    funct?: () => void,
    default?: boolean,
    path?: string,
}


export function ConfirmButton(props: typeConfirmButton){
    
    if(props.text == "REGISTRAR-SE"){
        return(
            <div className="buttonSubmitContainer">
            <button type="submit" className="buttonSubmitRegister" onClick={props.funct}>{props.text}
            </button>
        </div>
        );
    }

    if(props.text == "ENTRAR"){
        return(
            <div className="buttonSubmitContainer">
                <button type="submit" className="buttonSubmit" onClick={props.funct}>{props.text}
                </button>
            </div>
        );
    }
    
    if(props.default){
        return(
            <>
            <div className="buttonSubmitContainer">
                <a href={props.path} className="buttonLink" onClick={props.funct}>{props.text}</a>
            </div>

            <div className="buttonSubmitContainer">
                <a href={props.path} className="buttonLinkMenu" onClick={props.funct}>{props.text}</a>
            </div>
            </>
        );
    }

    if(props.text == "Ver carrinho"){
        return(
            <>
            <div className="buttonSubmitContainer">
                <a href={props.path} className="buttonLink" id="cartButton" onClick={props.funct}>
                    <p>{props.text}</p>
                    <ShoppingCart color="#0a6ebd" className="confirmIcon"></ShoppingCart>
                </a>
            </div>

            <div className="buttonSubmitContainer">
                <a href={props.path} className="buttonLinkMenu" id="cartButtonMenu" onClick={props.funct}>
                    <p>{props.text}</p>
                    <ShoppingCart color="#0a6ebd" className="confirmIconMenu"></ShoppingCart>
                </a>
            </div>
            </>
        );
    }
}