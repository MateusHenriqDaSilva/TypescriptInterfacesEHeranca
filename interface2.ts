// primeira interface
interface ProdutoTemplate {
    height: number
    width: number
    color: string
}
// function interface
interface produtoFuncaoInterface {
    (produto: ProdutoTemplate): ProdutoTemplate
}


// criar produto funcao
const criarProduto: produtoFuncaoInterface = (produto: ProdutoTemplate) => {
    return produto
}
// implementa a interface no objeto
const meuProduto: ProdutoTemplate = {
    height: 10,
    width: 12,
    color: 'red'
}

interface ProdutoClassInterface {
    produto: ProdutoTemplate
    criarProduto(produto: ProdutoTemplate): ProdutoTemplate
}

class Produto implements ProdutoClassInterface {
    produto: ProdutoTemplate
    
    constructor(produto: ProdutoTemplate) {
        this.produto = produto
    }

    criarProduto(): ProdutoTemplate{
        return this.produto
    }
}

// novo objeto de produto
const produtoObjeto: ProdutoTemplate = {
    height: 100,
    width: 100,
    color: 'rosa'
}

//  instanciamos a classe criar produto passando o objeto do produto
const novoProduto = new Produto(produtoObjeto)
const novoProduto2 = new Produto({height: 100, width: 200, color:'black'})
console.log(novoProduto.produto, novoProduto2)
