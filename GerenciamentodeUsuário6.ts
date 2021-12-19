// herancas
class PrimeiroUsuario {
    email: string = ""
    dataDeCriacao: number = 0
    ultimoLogin: number = 0
    private token: string = ""

    setToken(token: string): void {
        // mudar token do usuario
        this.token = token
    }

    resetarSenha(senha: string): string {
        // returna a nova string da senha
        return senha
    }
}

class AdminUsuario extends PrimeiroUsuario {
    // acessos que o usuario admin tem
    adminPaginas: string[] = ['admin', 'configuracao']

    // metodo para o admin resetar senhas do usuario
    resetarUsuarioSenha(email: string): string {
        // return senha padrao do usuario
        return "password123"
    }
}

// const adminUsuario: AdminUsuario = new AdminUsuario()
// let propriedadeString = ''
// for(let usuario in adminUsuario) {
//     propriedadeString += usuario + ','
// }
// console.log(propriedadeString)

class SuperAdmin extends AdminUsuario {
    SuperPages: string[] = ["super", "ultimate"]
    // readOnly somente leitura
    readonly minhaHash: string

    constructor() {
        super()
        this.minhaHash = '123456'
    }

    criarAdminUsuario(adminUsuario: AdminUsuario): AdminUsuario {
        return adminUsuario
    }

    resetarSenha(senha: string): string {
        // adicione o hash do password
        return senha + this.minhaHash
    }
}

// const superAdmin = new SuperAdmin()
// const novoAdmin = new AdminUsuario()
// console.log(superAdmin.resetarSenha('minhasenha'))
// console.log(novoAdmin.resetarSenha('minhasenha'))

// adminUsuario 2
class AdminUsuario2 extends PrimeiroUsuario {
    constructor(email: string) {
        super()
        this.email = email
    }

    AdminPaginas: string [] = ['admin', 'settings']

    resetarUsuarioSenha(): string {
        // return senha do usuario 
        return "password123"
    }
}

const adminusuario2teste = new AdminUsuario2('mateus@hotmmail.com')

