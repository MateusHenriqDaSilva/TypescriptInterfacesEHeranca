class Usuario {
    private usuarioNome: string
    private token: string = ''
    readonly tempoData: number = new Date().getTime()

    constructor(usuarioNome: string, token: string) {
        this.usuarioNome = usuarioNome
        this.token = token
    }

    sair(): void {
        this.usuarioNome = ''
        this.token = ''
    }
    getUser() {
        return {
            usuarioNome: this.usuarioNome,
            token: this.token,
            dataCriacao: this.tempoData
        }
    }

    protected renovarToken(novoToken: string) {
        this.token = novoToken
    }
}

class Caixa extends Usuario {
    saldo: number = 0
    centavos: number = 0

    iniciar(saldo: number, centavos: number): void {
        this.saldo = saldo
        this.centavos = centavos
    }
}

class Inventario extends Usuario {
    produtos: string[] = []

    constructor(usuarioNome: string, token: string, produtos: string[]) {
        super(usuarioNome, token)
        this.produtos = produtos
    }
}

class TrabalhadorDeConferirEstoque extends Inventario {
    estoqueConferido: string[] = []

    Conferir(id: number) {
        if (this.produtos.length >= 0) {
            this.estoqueConferido.push(
                this.produtos[id]
            )
        }
    }
}

const usuarioBasico = new Usuario('usuario1', '123456')
console.log(usuarioBasico)

const CaixaDoUsuario = new Caixa('usuario2', '1234567')
console.log(CaixaDoUsuario)
CaixaDoUsuario.iniciar(10, 1.5)
console.log(CaixaDoUsuario)

const inventarioUsuario = new Inventario('usuario3', '1234567', ['laranja', 'manga', 'playstation 2'])
console.log(inventarioUsuario)

const trabalhadorDeChaoUsuario = new TrabalhadorDeConferirEstoque('usuario4', '1234567', [
    'laranja', 'manga', 'playstatio 2'
])

trabalhadorDeChaoUsuario.Conferir(0)
console.log(trabalhadorDeChaoUsuario.produtos)
console.log(trabalhadorDeChaoUsuario.estoqueConferido)

