// Exemplo 1:
function error(message: string): never {
    throw new Error(message);
}

error('Erro de mensagem - 01');
