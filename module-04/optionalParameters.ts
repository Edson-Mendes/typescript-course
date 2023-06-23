// Exemplo 1:
const informarEndereco = (cep: string, rua: string, numero: number, complemento?:string) => {
    if (complemento == undefined)
        console.log(`CEP: ${cep}, Rua: ${rua}, Numero: ${numero}`);
    else 
        console.log(`CEP: ${cep}, Rua: ${rua}, Numero: ${numero}, Complemento: ${complemento}`);
}

informarEndereco('90420-090', 'Liberdade', 64, 'apto 203');
informarEndereco('90420-090', 'Liberdade', 64);