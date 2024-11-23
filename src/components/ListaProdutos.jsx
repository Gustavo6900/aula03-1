import { useEffect, useState } from "react";  

export default function ListaProdutos() {
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
     <div>

        <h1>Lista de Produtos </h1>
       <>
    <ul >
        {lista.map(produto =>( 
            <li key={produto.id}>
                <h2>{produto.title}</h2>
                <p>{produto.description}</p>
                <p>Preço: {produto.price}</p>
                <img src={produto.image} alt={produto.title} />
            </li>
        ))}
    </ul>
    </>
     </div>
    )
}