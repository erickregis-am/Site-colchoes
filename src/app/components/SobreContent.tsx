import "../Global.css";
import "./components-styles/SobreContent.css";
import { ConfirmButton } from "./components-buttons/ConfirmButton"; "./components-buttons/ConfirmButton";

type typeSobreContent = {
    // as props do componente
}

export default function SobreContent(props: typeSobreContent){
    return (
        <>
            <div className="welcomeSobre-container">
                <div className="welcomeSobre-div">
                        <div className="welcomeSobre-contentText-div">
                    
                        <div className="welcomeSobre-texts">
                            <p className="p1-welcome">Tudo que você procura</p>
                            <h1 className="h1-welcome">A maior loja de colchões do Brasil</h1>
                            <p className="p2-welcome">Produtos nacionais e importados para você ter a melhor noite de sono possível!</p>
                        </div>
                
                        <div className="sobreButtons">
                            <ConfirmButton text="Ir para a loja" path="./catalogo" default/>
                            <ConfirmButton text ="Ver carrinho"/>
                        </div>

                        </div>

                        <div className="welcomeSobre-image-div">
                            <img src="https://blog.americanflex.com.br/wp-content/uploads/2017/11/o-que-devo-saber-antes-de-comprar-um-colchao-de-espuma-1080x720.jpeg" alt="" className="product-image"/>
                        </div>
                    </div>
            </div>


            <div className="beneficiosSobre-container">

                <div className="benSobre-text">
                    <h1>Benefícios na compra</h1>
                    <p>Quem compra na Mundo dos colchões pode aproveitar uma série de benefícios</p>
                </div>
                <div className='benSobre-boxes'>
                    <div className="benSobre-box1"> <h2><b>Compra segura</b></h2>
                    Compre o seu produto e tenha a segurança de toda a transação</div>
                    <div className="benSobre-box2"> <h2><b>Qualidade garantida</b></h2>
                    Tenha 10 anos de garantia ao comprar um de nossos colchões</div>
                    <div className="benSobre-box3"> <h2><b>Desconto amigo</b></h2>
                    Você terá o direito de ganhar um desconto de até 10% Off no pix</div>
                </div>  
            </div>

        </>
    );
}