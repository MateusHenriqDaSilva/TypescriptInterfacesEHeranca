interface UsarInterface {
    email: string
    token: string
    resetarSenha: () => boolean
}

const usuario: UsarInterface = {
    email: 'mateus@hotmail.com',
    token: '123456',
    resetarSenha(): boolean {
        return true
    }
}