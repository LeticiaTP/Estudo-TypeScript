// Operadores aritiméticos
let num1: number = 4;
let num2: number = 5;

let soma: number = num1 + num2; // soma = 9
let subtracao: number = num1 - num2; // subtracao = -1
let divisao: number = num1 / num2; // divisao = 0,8
let multiplicacao: number = num1 * num2; // multiplicacao = 20


// A ordem de resolução é a mesma das operações matemáticas
let calculo1 = 7 + 7 * 4; // calculo1 = 35
let calculo2 = (7 + 7) * 4 // calculo2 = 56


// Módulo: retorna o valor do resto de uma divisão
let numero1: number = 10;
let numero2: number = 3;
let moduloResult: number = numero1 % numero2; // moduloResult = 1


//Incremento: soma +1 ao valor. 
let incrementoAntes: number = 10; // 1 - Antes da variável (o resultado será o valor após a soma)
let incrementoDepois: number = 20 // 2 - Depois da variável (o resultado será o valor antes da soma)

console.log(++incrementoAntes); // incrementoAntes = 11
console.log(incrementoDepois++); // incrementoDepois = 20
console.log(incrementoDepois); // incrementoDepois = 21


// Descremento: subtrai -1 ao valor.
let decrementoAntes: number = 10; // 1 - Antes da variável (o resultado será o valor após a subtração)
let decrementoDepois: number = 20 // 2 - Depois da variável (o resultado será o valor antes da subtração)

console.log(--decrementoAntes); // decrementoAntes = 9
console.log(decrementoDepois--); // decrementoDepois = 20
console.log(decrementoDepois); // decrementoDepois = 19


// Concatenação
let primeiroNome:any = 'Letícia ';
let sobrenome:any = 'Paulino';
let nomeSobrenome:any = primeiroNome + sobrenome; // nomeSobrenome = 'Letícia Paulino'
let anosDeIdade:any = 19;
let nomeAnosDeIdade:any = 'Nome: ' + nome + sobrenome + '; Idade: ' + idade; // Nome: Letícia Paulino; Idade: 19


// Atribuição: atribuem valor as variáveis ou realizam operações aritméticas antes de atribuir valor
let saborBolo: String = 'morango'; // igualdade: atribui valor a variável
let somaAtribuicao: number = num1 += num2 // soma os valores e atribui o resultado ao operando do lado esquerdo
let subtracaoAtribuicao: number = num1 -= num2 // subtrai os valores e atribui o resultado ao operando do lado esquerdo
let multAtribuicao: number = num1 *= num2 // multiplica os valores e atribui o resultado ao operando do lado esquerdo
let divisaoAtribuicao: number = num1 /= num2 // divide os valores e atribui o resultado ao operando do lado esquerdo


// Operadores relacionais (booleanos)
let comparacao1: number = 6;
let comparacao2: number = 2;
let comparacao3: number = 5;
let comparacao4: number = 5;
let resultado: boolean;

resultado = comparacao1 > comparacao2; // Maior que: Identifica se um valor é maior que o outro
console.log(resultado); // retorna True

resultado = comparacao1 < comparacao2; // Menor que: Identifica se um valor é menor que o outro
console.log(resultado); // retorna False

resultado = comparacao3 >= comparacao4; // Maior que ou igual: Identifica se um valor é maior ou igual ao outro
console.log(resultado); // retorna True

resultado = comparacao2 <= comparacao3; // Menor que ou igual: Identifica se um valor é menor q e ou igual ao outro
console.log(resultado); // retorna False

resultado = comparacao1 == comparacao2; // Comparação de igualdade: Identifica se ambos são iguais
console.log(resultado); // tetorna False

resultado = comparacao1 != comparacao2; // Comparação de diferença: Identifica se ambos são diferentes
console.log(resultado); // retorna True


// Operadores lógicos: funciona como os booleanos
let comparador1: number =  5;
let comparador2: number =  6;
let comparador3: number =  7;

// && só retorna True se todas as operações forem verdadeiras
let retornaTrue1: boolean = comparador1 < comparador2 && comparador3 > comparador2; 
let retornaFalse1: boolean = comparador1 < comparador2 && comparador2 > comparador3; 

// || só precisa que uma das operações seja verdadeira para retornar True
let retornaTrue2: boolean = comparador1 < comparador2 || comparador3 > comparador2; 
let retornaFalse2: boolean = comparador1 > comparador2 || comparador2 > comparador3; 

// ! (NOT ou Não) inverte o resultado de uma expressão booleana
let trueBool = true;
let falseBool = !trueBool;