'use client'

import { ArrowLeft, Atom, Container } from "lucide-react";
import "../Global.css";
import { Checkbox } from "../components/components-buttons/Checkbox";
import { LogSigBox } from "../components/components-box/LogSigBox";
import "./page.css";
import { useEffect, useState } from "react";
import { BackButton } from "../components/components-buttons/BackButton";
import { ConfirmButton } from "../components/components-buttons/ConfirmButton";
import { getFormDatasRegister } from "../scripts/getFormsData";
import { db } from "../services/firebaseConfig";

export default function Sigin(){

    const [checked, setChecked] = useState(false);

    function changeChecked(){
        setChecked(!checked);
    }


    return(
        <div className="login-page">
            <div className="container">
                <div className="things-container"> 
                    <div className="textLogin">
                        <div className="backButtonDiv">
                            <BackButton path="../"></BackButton>
                        </div>
                    
                        <div className="textDivLogin">
                            <h1>Cadastro</h1>
                        </div>
                    </div>

                    <form className="form-container">
                            
                            <LogSigBox type="text" placeholderText="usuário" name="user" iconId="UserPen" typeOfBox="Log"/>
                            <LogSigBox type="text" placeholderText="email" name="email" iconId="Mails" typeOfBox="Log"/>
                            <LogSigBox type="password" placeholderText="senha" name="password" iconId="lockKeyhole" typeOfBox="Log"/>
                            <LogSigBox type="password" placeholderText="confirmar senha" name="confirmPassword" iconId="lockKeyhole" typeOfBox="Log"/>

                            <ConfirmButton text="REGISTRAR-SE" funct={getFormDatasRegister}/> 
                        
                    </form>
                </div>
            </div>
        </div>
        
    );
}