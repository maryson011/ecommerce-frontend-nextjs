import Produto from "@/data/model/Produto"
import Image from "next/image"

export interface CartaoProdutoProps {
    produto: Produto
}

export default function CartaoProduto(props: CartaoProdutoProps) {
    const { nome, descricao, preco, imagem } = props.produto
    return (
        <div className="flex felx-col w-72">
            <div className="relative w-72 h-52">
                <Image src={imagem} alt={nome} fill className="object-cover"/>
            </div>
            <div className="flex-1">
                
            </div>
        </div>
    )
}