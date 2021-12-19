interface IProduto {
    altura: number
    largura: number
    cor: string
}

interface IFuncaoProduto {
    (produto: IProduto): void
}

interface IProdutoClasse {
    criarProduto: IFuncaoProduto
    mostrarProdutos(): IProduto[]
}

class ProdutoClasse implements IProdutoClasse {
    produtos: IProduto[]
    constructor() {
        this.produtos = []
    }
    criarProduto(produto: IProduto) {
        this.produtos.push(produto)
    }
    mostrarProdutos(): IProduto[] {
        console.log(this.produtos)
        return this.produtos
    }
}

const objetoDaClasse = new ProdutoClasse()
objetoDaClasse.criarProduto({ altura: 200, largura: 200, cor: 'black' })
objetoDaClasse.mostrarProdutos()