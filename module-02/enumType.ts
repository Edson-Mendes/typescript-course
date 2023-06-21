// Numeric Enums
enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances
}

console.log(Idioma);

// String Enums
enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}

console.log(Dia);

// Const ENUM
const enum Comida {
    Pizza = 'Pizza',
    Macarrão = 'Macarrão',
    Churrasco = 'Churrasco',
    Hamburger = 'Hamburger',
    Curry = 'Curry'
}

function showMessage(comida: Comida) {
    console.log(`${comida} é muito bom!`);
}

showMessage(Comida.Churrasco);


