	
import { useEffect, useState } from "react";
import styles from "./components/home.module.css"

export default function Home(){
    const [lista, setLista ] = useState([])

        useEffect(() => {
            const receberlistaprodutos = async () => {

                try{
                const resposta = await fetch('https://fakestoreapi.com/products')
                const dados = await resposta.json();
                setLista(dados)
            }
            catch{
                alert("erro")
            }
        }
        receberlistaprodutos()
        }, [])
        return(
           <>
           <h1>Lista Produtos</h1>

           <ul className={styles.produto}> 
            {lista.map(produto =>(
                <li className={styles.item} key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <p> Preço: {produto.prico}</p>
                    <img src={produto.image} alt={produto.title} width={100} />
                </li>
            ))}
           </ul>
           </>
        )
   
}