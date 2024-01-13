class  heroi{
    constructor(nome, idade, tipo, ataque) {

    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.ataque = ataque
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}.`)
    }
}

let heroiMago = new heroi("Erique", 25, "Mago", "magia")
let heroiGuerreiro = new heroi("Paolo", 25, "Guerreiro", "espada")
let heroiMonge = new heroi("Kuririn", 25, "Monge", "artes marciais")
let heroiNinja = new heroi("Naruto", 25, "Ninja", "shuriken")

heroiMago.atacar()
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()