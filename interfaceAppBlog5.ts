//  estamos utilizando types
type BlogPostagem = {
    postagem: string
    tempo: number
    usuario: string
}

interface AdicionarPostagem {
    (postagem: BlogPostagem): BlogPostagem[]
}

interface ClasseDePostagem {
    mostrarPostagem: BlogPostagem[]
    adicionarPostagem: AdicionarPostagem
}

class Blog implements ClasseDePostagem {
    mostrarPostagem: BlogPostagem[] = []
    adicionarPostagem(postagem: BlogPostagem) {
        this.mostrarPostagem = [
            ...this.mostrarPostagem,
            postagem
        ]
        return this.mostrarPostagem
    }
}

const blogObj = new Blog()
let postagem1 = { postagem: 'ola mundo', tempo: 60, usuario: 'mateus' }
let postagem2 = { postagem: 'ola vida', tempo: 120, usuario: 'leliane' }
let postagem3 = { postagem: 'ola trabalho', tempo: 200, usuario: 'larissa' }
blogObj.adicionarPostagem(postagem1)
blogObj.adicionarPostagem(postagem2)
blogObj.adicionarPostagem(postagem3)
console.log(blogObj.mostrarPostagem)
