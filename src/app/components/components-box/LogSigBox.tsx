import "../components-styles/LogSigBox.css"
import { Eye, EyeOff, UserPen } from "lucide-react";
import { Mails } from "lucide-react";
import { useEffect, useState } from "react";
 
type typeLogBox = {
    iconId: string;
    type: string,
    name: string,
    typeOfBox: string;
    placeholderText: string;
}

export function LogSigBox(props: typeLogBox){
 
    const [inputValue, setInputValue] = useState('');
    const [isPassword, setIsPassword] = useState('');
    const [passwordToggle, setPasswordToggle] = useState(false);
    const [inputConfirmString, setInputConfirmString] = useState("");

    function changeInputValue(e: any){
        setInputValue(e.target.value);
        
    }

    function changeInputConfirmString(e: any){
        setInputConfirmString(e.target.value);
    }


    function changeIsPassword(e: any){
        setIsPassword(e.target.value);
    }

    function changeToggleVisibility(e: any){
        setPasswordToggle(!passwordToggle);
    }

    function placeholderUpLetter(){
        let nameBox = props.placeholderText;
        var placeholderBox = nameBox.charAt(0).toUpperCase() + nameBox.slice(1);
        return placeholderBox;
    }
    if(props.typeOfBox == "Log"){ // tipo de Box

        if(props.type == "password"){
            if(!passwordToggle){
                return (
                    <div className="inputContainer">
                        <input type="password" minLength={8} maxLength={32} id={props.name}  
                        className="inputBox" name={props.name} 
                        placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        value={inputValue} onChange={changeInputValue} required></input>
                        <button className="iconButton" type="button" onClick={changeToggleVisibility}>
                            <EyeOff className="inputIcons"></EyeOff>
                        </button> 
                    </div>
                );
            } else {
                return (
                    <div className="inputContainer">
                        <input type="text" minLength={8} maxLength={32} id={props.name}  
                        className="inputBox" name={props.name} 
                        placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        value={inputValue} onChange={changeInputValue} required></input>
                        <button className="iconButton" type="button" onClick={changeToggleVisibility}>
                            <Eye className="inputIcons"></Eye>
                        </button> 
                    </div>
                );
            }
        }
    
        if(props.iconId == "Mails"){
            return (
                <div className="inputContainer">
                    <input type={props.type} id={props.name} className="inputBox" name={props.name} 
                    placeholder={placeholderUpLetter()} pattern="^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?$"
                    value={inputValue} onChange={changeInputValue} required></input>
                    <div className="iconContainer">
                        <Mails className="inputIcons"></Mails>
                    </div> 
                </div>
            );
        }
        
    } else {

        if(props.type == "password"){
            if(!passwordToggle){
                return (
                    
                    <div className="inputContainer">
                        <input type="password" minLength={8} maxLength={32} id={props.name}  
                        className="inputBox" name={props.name} 
                        placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        value={isPassword} onChange={changeIsPassword} required></input>
                        <button className="iconButton" type="button" onClick={changeToggleVisibility}>
                            <EyeOff className="inputIcons"></EyeOff>
                        </button> 
                    </div>
                );
            } else {
                return (
                    <div className="inputContainer">
                        <input type="text" minLength={8} maxLength={32} id={props.name}  
                        className="inputBox" name={props.name} 
                        placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        value={isPassword} onChange={changeIsPassword} required></input>
                        <button className="iconButton" type="button" onClick={changeToggleVisibility}>
                            <Eye className="inputIcons"></Eye>
                        </button> 
                    </div>
                );
            }
        }
    
        if(props.iconId == "Mails"){
            return (
                <div className="inputContainer">
                    <input type={props.type} id={props.name} className="inputBox" name={props.name} 
                    placeholder={placeholderUpLetter()} pattern="^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?$"
                    value={inputValue} onChange={changeInputValue} required></input>
                    <div className="iconContainer">
                        <Mails className="inputIcons"></Mails>
                    </div> 
                </div>
            );
        }


    }

    if(props.typeOfBox == "Sig"){
        
        if(props.type == "password"){
            if(!passwordToggle){
                return (
                    <div className="inputContainer">
                        <input type="password" minLength={8} maxLength={32} id={props.name}  
                        className="inputBox" name={props.name} 
                        placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        value={isPassword} onChange={changeIsPassword} required></input>
                        <button className="iconButton" type="button" onClick={changeToggleVisibility}>
                            <EyeOff className="inputIcons"></EyeOff>
                        </button> 
                    </div>
                );
            } else {
                return (
                    <div className="inputContainer">
                        <input type="text" minLength={8} maxLength={32} id={props.name}  
                        className="inputBox" name={props.name} 
                        placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g"
                        value={isPassword} onChange={changeIsPassword} required ></input>
                        <button className="iconButton" type="button" onClick={changeToggleVisibility}>
                            <Eye className="inputIcons"></Eye>
                        </button> 
                    </div>
                );
            }
        }
    
        if(props.iconId == "Mails"){
            return (
                <div className="inputContainer">
                    <input type={props.type} id={props.name} className="inputBox" name={props.name} 
                    placeholder={placeholderUpLetter()} pattern="^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?$"
                    value={inputValue} onChange={changeInputValue} required></input>
                    <div className="iconContainer">
                        <Mails className="inputIcons"></Mails>
                    </div> 
                </div>
            );
        }
        
    } else {

        if(props.type == "password"){
            if(!passwordToggle){
                return (
                    
                    <div className="inputContainer">
                        <input type="password" minLength={8} maxLength={32} id={props.name}  
                        className="inputBox" name={props.name} 
                        placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        value={isPassword} onChange={changeIsPassword} required></input>
                        <button className="iconButton" type="button" onClick={changeToggleVisibility}>
                            <EyeOff className="inputIcons"></EyeOff>
                        </button> 
                    </div>
                );
            } else {
                return (
                    <div className="inputContainer">
                        <input type="text" minLength={8} maxLength={32} id={props.name}  
                        className="inputBox" name={props.name} 
                        placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        value={isPassword} onChange={changeIsPassword} required></input>
                        <button className="iconButton" type="button" onClick={changeToggleVisibility}>
                            <Eye className="inputIcons"></Eye>
                        </button> 
                    </div>
                );
            }
        }
    
        if(props.iconId == "Mails"){
            return (
                <div className="inputContainer">
                    <input type={props.type} id={props.name} className="inputBox" name={props.name} 
                    placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                    value={inputValue} onChange={changeInputValue} required></input>
                    <div className="iconContainer">
                        <Mails className="inputIcons"></Mails>
                    </div> 
                </div>
            );
        }

        if(props.iconId == "UserPen"){
            return (
                <div className="inputContainer">
                    <input type={props.type} id={props.name} className="inputBox" name={props.name} 
                    placeholder={placeholderUpLetter()} maxLength={50}
                    value={inputValue} onChange={changeInputValue} required></input>
                    <div className="iconContainer">
                        <UserPen className="inputIcons"></UserPen>
                    </div> 
                </div>
            );
        }

        if(props.placeholderText == "confirmar senha"){
            if(props.type == "password"){

                if(!passwordToggle){

                    return (
                        <div className="inputContainer">
                            <input type="password" minLength={8} maxLength={32} id={props.name}  
                            className="inputBox" name={props.name} 
                            placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                            onChange={changeInputConfirmString}  required title="Confirme a senha!"></input>
                            <button className="iconButton" type="button" onClick={changeToggleVisibility}>
                                <EyeOff className="inputIcons"></EyeOff>
                            </button>
                        </div>
                    );
                } else {
                    return (
                        <div className="inputContainer">
                            <input type="text" minLength={8} maxLength={32} id={props.name}  
                            className="inputBox" name={props.name} 
                            placeholder={placeholderUpLetter()} pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                            onChange={changeInputConfirmString} required title="Confirme a senha!"></input>
                            <button className="iconButton" type="button" onClick={changeToggleVisibility}>
                                <Eye className="inputIcons"></Eye>
                            </button>            
                        </div>
                    );
                }
            }
        }

    }
}