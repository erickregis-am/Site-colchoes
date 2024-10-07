import "./components-styles/LogSigAsk.css";
import { CircleUser } from "lucide-react";

export default function LogSigAsk(){
    return (
        <main className="log-sig-ask">
            <div className="text-container">
                <p className="text-presentation">Olá a todos</p>
                <p className="text-presentation">Bem-vindos ao Mundo dos Colchões</p>
                <p className="text-presentation">Escolha a opção que melhor lhe convém.</p>
            </div>
            

            <div className="log-sig-container">
                <div className="buttonLogCont">
                    <CircleUser id="log"></CircleUser>
                    <a href="../login" id="btnLog"><p>Entrar</p></a>
                </div>

                <div className="buttonSigCont">
                    <CircleUser id="sig"></CircleUser>
                    <a href="../sigin" id="btnSig"><p>Registrar</p></a>
                </div>
            </div>
        </main>
    );
}