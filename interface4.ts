type Usuario = {
    email: string,
    usuarioId: number
}

interface IAdicionarUsuario {
    (usuario: Usuario): Usuario[]
}

let todosUsuarios: Usuario[] = [
    { email: 'mateus@hotmail.com', usuarioId: 1 },
    { email: 'larissa@hotmail.com', usuarioId: 2 }
]

let adicionarUsuario: IAdicionarUsuario

adicionarUsuario = function (usuario: Usuario): Usuario[] {
    return [
        ...todosUsuarios,
        usuario
    ]
}

console.log(adicionarUsuario({ email: 'gabriel@hotmail.com', usuarioId: 3 }))
console.log(adicionarUsuario({ email: 'ingrid@hotmail.com', usuarioId: 4 }))
console.log(adicionarUsuario({ email: 'leliane@hotmail.com', usuarioId: 5 }))