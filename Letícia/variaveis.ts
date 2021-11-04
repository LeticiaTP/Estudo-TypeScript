// declaração implícita e explícita
const testeVarConst: string = "Esta é uma declaração de variável constante de forma explícita"
let testeVarExplicita: string;
let testeVarImplicita = "string";

// boolean
let variavelBooleana: boolean;
let variavelBooleana2 = false;

// number
let testeNumber: number;

// aspas ou a apóstrofos
// sobre esse ponto: não há certo ou errado, é bom manter o padrão do projeto.
let varAspas: string = "Uma string pode ser declarada entre aspas";
let varApostrofos: string = "Uma string também pode ser declarada entre apóstrofos";

// implementar uma string com outras variáveis 
let nome: string = "Letícia";
let idade: number = 19;
let nomeIdade: string = `Meu nome é: ${nome}, e eu tenho ${idade} anos.`

// existem duas formas de declarar Arrays
// Não existe certo ou errado, mas a segunda forma facilita a leitura do código
let cores: string[] = ["azul", "verde", "marrom"];
let tabuadaNumeroDois: Array<number> = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// tuple
let tupleNomeIdade: [string, number] = ["Leticia", 19]

// enum
// Caso deseje colocar espaços ou usar acentos, a segunda forma possibilita
enum dias {
    segunda,
    terca,
    quarta,
    quimta,
    sexta,
    sabado,
    domingo
}

enum nomes {
    "Karla",
    "Letícia",
    "Karla Letícia"
}

// tipo any (usada quando não sabemos que tipo de dado esperar)
let variavelAny: any = "String" // pode receber string
variavelAny = 10; // pode receber number
variavelAny = true; // pode receber boolean

// void
function exibirMensagem(): void {
    console.log("Funções void não tem retorno!")
}

// null e undefinied
let indefinido: undefined = undefined;
let nulo: null = null;

// never (representa o tipo dos valores que nunca acontecem e é diferente de void)
// void pode receber null e undefined; never não pode receber nada
function exibirCarregando(): never { 
    while (true) { 
        console.log("Carregando!"); 
    } 
}