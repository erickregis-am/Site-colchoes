'use client'

import { ArrowLeft, Atom } from "lucide-react";
import "../Global.css";
import { Checkbox } from "../components/components-buttons/Checkbox";
import { LogSigBox } from "../components/components-box/LogSigBox";
import "./page.css";
import { useState } from "react";
import { BackButton } from "../components/components-buttons/BackButton";
import { ConfirmButton } from "../components/components-buttons/ConfirmButton";


export default function Login(){

    const [checked, setChecked] = useState(false);

    function changeChecked(){
        setChecked(!checked);
    }

    function holdVoid(){}

    return(
        <div className="login-page">
            <div className="container">
                <div className="things-container"> 
                    <div className="textLogin">
                        <div className="backButtonDiv">
                            <BackButton path="../"></BackButton>
                        </div>
                    
                        <div className="textDivLogin">
                            <h1>Login</h1>
                        </div>
                    </div>

                    <form className="form-container" action="./">
                
                            <LogSigBox placeholderText="email" type="text" name="emaillog" iconId="Mails" typeOfBox="Log"/>
                            <LogSigBox placeholderText="senha" type="password" name="passwordlog" iconId="lockKeyhole" typeOfBox="Log"/>
                        <div className="rememberMeContainer">
                            <Checkbox checked={checked} label="Lembrar de mim." onChange={changeChecked}></Checkbox>
                    
                        <div id="forgetPassword">
                            <a><p>Esqueceu a senha?</p></a>
                        </div>
                        </div>
                        
                        <ConfirmButton text="ENTRAR" funct={holdVoid}/>

                    </form>
                </div>
            </div>
        </div>
        
    );
}