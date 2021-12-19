class Celular {
    iniciarBotao: boolean;
    microfone: boolean;
    falar: boolean;
    serialNumero: string;
    iniciarLigado: boolean = false;
    restarte: boolean = false;

    constructor(iniciarBotao: boolean, microfone: boolean, falar: boolean, serialNumero: string) {
        this.iniciarBotao = iniciarBotao
        this.microfone = microfone
        this.falar = falar
        this.serialNumero = serialNumero
    }

    apertarNoIniciar(): void {
        this.iniciarBotao ? this.iniciarBotao = false : this.iniciarBotao = true
    }

    reiniciar(): void {
        this.restarte = true
    }
}

class CelularInteligente extends Celular {
    tocarNaTela: boolean = true
    internet4G: boolean = true

    constructor(serial: string) {
        super(true, true, true, serial)
    }

    iniciarVideo(arquivo: string) {
        return true
    }
}

class CelularBurro extends Celular {
    tecladoDeDiscagem: boolean = true
    internet3G: boolean = true

    constructor(serial: string) {
        super(true, true, true, serial)
    }

    numeroParaALetra(number: number): string {
        const letra = ['a', 'b', 'c', 'd']
        return letra[number]
    }
}

const celularInteligente = new CelularInteligente('1234567')
const celularPadrao = new CelularBurro('1234')

console.log(celularInteligente.iniciarVideo('videoOne'))
console.log(celularPadrao.numeroParaALetra(3))

console.log(celularInteligente)
console.log(celularPadrao)