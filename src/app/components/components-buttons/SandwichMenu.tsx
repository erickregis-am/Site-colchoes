import { MenuIcon } from "lucide-react";
import "../components-styles/SandwichMenu.css";
import { useState } from "react";

type sandwichMenuType = {
    onclick?: VoidFunction,
}

export default function SandwichMenu(props: sandwichMenuType){
    return(
        <span className="MenuSpan" onClick={props.onclick}>
            <MenuIcon className="MenuIcon"/>
        </span>
    );
}