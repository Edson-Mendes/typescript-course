export {};

// Exemplo 1:
class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

const funcionario = new Funcionario(new Date(1994, 5, 30));
//funcionario.dataNascimento = new Date(2023, 10, 10); // Campo read only

// --------------------------------------------------------
// Exemplo 2:
class Funcionario2 {
    readonly id: number;
    cargo: string;

    constructor(id: number, cargo: string) {
        this.id = id;
        this.cargo = cargo;
    }
}

const funcionario2 = new Funcionario2(123, 'Desenvolvedor web');

funcionario2.cargo = 'Desenvolvedor mobile';
//funcionario2.id = 666; // campo read only

// --------------------------------------------------------
// Exemplo 3:

interface IFuncionario {
    codigo: number;
    nome: string;
}

const funcionario3: Readonly<IFuncionario> = {
    codigo: 123456,
    nome: 'Edson Mendes'
}

//funcionario3.nome = 'Edson'; // Campo read only