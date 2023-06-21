export { };

// Exemplo 1:
const pessoa = {
    nome: "Edson",
    sobrenome: "Mendes",
    idade: 29,
    cargo: "Java Backend Developer"
}

// console.log(pessoa);

// Exemplo 2:
function onBoarding01(funcionario: {nome: string}) {
    return 'Seja bem vindo(a) '+ funcionario.nome
}

// console.log(onBoarding01(pessoa));

// Exemplo 3:
interface Pessoa {
    nome: string;
    cargo: string;
}

function onBoarding02(funcionario: Pessoa) {
    return `Seja bem vindo ${funcionario.nome}, seu cargo será ${funcionario.cargo}`;
}

// console.log(onBoarding02(pessoa));

// Exemplo 4:
type Desenvolvedor = {
    nome: string;
    cargo: string;
    linguagem: string;
}

function onBoarding03(funcionario: Desenvolvedor) {
    return `Seja bem vindo ${funcionario.nome}, seu cargo será ${funcionario.cargo} e você trabalhará com ${funcionario.linguagem}`;
}

// console.log(onBoarding03({nome: "Edson", cargo: "Backend Developer", linguagem: "Java"}));

// Exemplo 5:
interface Funcionario {
    nome: string,
    cargo: string,
    linguagem: string,
    readonly email: string
}

function onBoarding04(funcionario: Funcionario) {
    return `Seja bem vindo ${funcionario.nome}, seu cargo será ${funcionario.cargo} e você trabalhará com ${funcionario.linguagem}`;
}

// console.log(onBoarding04({nome: 'Edson', cargo: 'Backend Developer', linguagem: 'Java'}));

// Exemplo 6:
interface Funcionario1 {
    nome: string,
    cargo: string,
    linguagem: string,
    email?: string
}

function onBoarding05(funcionario: Funcionario1) {
    return `Seja bem vindo ${funcionario.nome}, seu cargo será ${funcionario.cargo} e você trabalhará com ${funcionario.linguagem}`;
}

// console.log(onBoarding04({nome: 'Edson', cargo: 'Backend Developer', linguagem: 'Java', email: 'edson@email.com'}));

// Exemplo 7:
interface Mae {
    nomeMae: string
}

interface Pai {
    nomePai: string
}

interface Filho extends Mae, Pai {
    nome: string,
    idade: number,
}

const filho: Filho = {
    nome: 'Edson',
    idade: 29,
    nomeMae: 'Maria',
    nomePai: 'Manoel'
}

// console.log(filho);

// Exemplo 8:
interface Gato {
    raca: string
}

interface Cachorro {
    raca: string
}

type Animal = Cachorro & Gato;

// Exemplo 9:
type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    isAdmin: boolean;
}

const usuario: Usuario = {
    nome: "Mei",
    email: "mei@email.com"
}

const admin: Admin = {
    nome: "Mei",
    email: "mei@email.com",
    isAdmin: true
}

function acessarSistema<T>(usuario: T) :T {
    return usuario;
}

console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
