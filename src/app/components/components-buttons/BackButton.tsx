import path from "path";
import "../../Global.css";
import "../components-styles/BackButton.css";
import { ArrowLeft } from "lucide-react";

type typeofBackButton = {
    path: string,       
}

export function BackButton(props: typeofBackButton){
    return(
        <button type="button" className="backButton">
            <a href={props.path} className="back">
                <ArrowLeft className="icon"></ArrowLeft>
            </a>
        </button>
    );
} 