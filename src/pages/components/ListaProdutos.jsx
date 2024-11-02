
export default function Produtos({produtos}) {
    return(
        <>
        <ul className={style.bloco}>
            {produtos.map(produto =>( 
                <li key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <p>Preço: {produto.price}</p>
                    <img src={produto.image} alt={produto.title} />
                </li>
            ))}
        </ul>
        </>
    )
}