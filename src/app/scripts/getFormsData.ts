import { db } from "../services/firebaseConfig";
import { set, ref } from "firebase/database";
import { makeIdentity } from "./makeIdentity";

export function getFormDatasRegister(){
  
    var id: string = makeIdentity();

    const userValue = (document.getElementById("user") as HTMLInputElement).value;
    const emailValue = (document.getElementById("email") as HTMLInputElement).value;
    const passwordValue = (document.getElementById("password") as HTMLInputElement).value;
    const confirmPasswordValue = (document.getElementById("confirmPassword") as HTMLInputElement).value;

    const ids = [userValue, emailValue, passwordValue, confirmPasswordValue];

  
}
 