// ⚠️ NÃO ESQUECER QUE CADA LINHA TEM QUE SER COMENTADA FALANDO O QUE TA FAZENDO ⚠️

const nome = 'Gustavo';
// declarando constante nome
const idade = 19;
// declarando constante idade

// quebra de linha para identação
const limiteTarefas = 4;
// declarando limite de tarefas

// quebra de linha para identação
let listaDeTarefas = [
// declarando let lista de tarefas que vai ser um array de objetos, um clássico
    {
    // abrindo chaves para declarar o objeto 
        descricao: 'Estudar',
        // declarando o item descricao com o valor Estudar dentro do objeto
        completa: false,
        // declarando o item completa com o valor de false pra dizer que não ta completa ainda
    },
    //fechando a chaves e colocando uma virgula para conseguir abrir outro objeto
    {
    // abrindo chaves para declarar o objeto 
        descricao: 'Comprar leite',
        // declarando o item descricao com o valor Comprar leite dentro do objeto
        completa: true,
        // declarando o item completa com o valor de true pra dizer que ta completa
    },
    //fechando a chaves e colocando uma virgula para conseguir abrir outro objeto
    {
    // abrindo chaves para declarar o objeto 
        descricao: 'Ir à academia no dia de perna',
        // declarando o item descricao com o valor Ir a academia no dia de perna dentro do objeto
        completa: false,
        // declarando o item completa com o valor de false pra dizer que não ta completa ainda
    },
    //fechando a chaves e colocando uma virgula para conseguir abrir outro objeto
    {
    // abrindo chaves para declarar o objeto 
        descricao: 'Estudar (de novo)',
        // declarando o item descricao com o valor Estudar de novo dentro do objeto
        completa: true,
        // declarando o item completa com o valor de true pra dizer que ta completa
    },
    //fechando a chaves e colocando uma virgula para conseguir abrir outro objeto
]
// fechando a abertura do array da lista de tarefas

// quebra de linha para identação
function saudarUsuario(nome, idade) {
// criando uma função saudarUsuario que recebe nome e idade como parametros
    console.log(`
        👋 Olá, ${ nome }, você tem ${ idade } anos.
    `);
    // abrindo console e formatando pra ter uma mensagem de ola para o usuário
    return;
    // dando um return para para garantir o fim da execução desta função
}
// fechando a função

// quebra de linha para identação
function adicionarTarefa(descricao) {
// criando a função adicionarTarefa pra adicionar a tarefa que o usuário quiser adicionar
    if (listaDeTarefas.length >= limiteTarefas) return console.log('O limite já foi alcançado, não da pra adicionar mais itens.');
    // verificando se o tamanho da lista atual é igual ao limite ou maior, se for vai para a função e retornar um console
    if (listaDeTarefas.length < limiteTarefas) {
        // verificando se o tamanho da lista atual é menor que o limite de itens
        console.log(`Item 1 - ${ listaDeTarefas[0] ? listaDeTarefas[0].descricao : 'Não tem também' },\nItem 2 - ${ listaDeTarefas[1] ? listaDeTarefas[1].descricao : 'Não tem' }`);
        // printando os dois primeiros itens da lista e fazendo uma verificação se existe algum valor valido, se não tiver valor é printado um não tem
    }
    // fechando o bloco if

    // quebra de linha para identação
    listaDeTarefas.push({
    // abrindo a função para adicionar um item dentro da lista de tarefas
        descricao: descricao,
        // adicionando a descrição enviada pelo usuário ao objeto que vai ser enviado a lista
        completa: false,
        // setando completa com false por padrão, se ele já tiver completado ai da pra mudar em outra função
    });
    // fechando abertura da função push a lista de tarefas

    // quebra de linha para identação
    return;
    // dando um return para para garantir o fim da execução desta função
}
// fechando a função

// quebra de linha para identação
function marcarComoCompleta(i) { // indice do item a ser marcado como completo ( se quiser fazer um UX mais entendivel da pra diminuir 1, pra então o cara só digitar, "excluir item 1" e deleta o item 0)
// abrindo função marcarComoCompleta
    if (listaDeTarefas && listaDeTarefas[i]) listaDeTarefas[i].completa = true;
    // verificando se existe a lista e se o item naquela posição existe, se existir marca como concluido
    return;
    // dando um return para para garantir o fim da execução desta função
}
// fechando a função

// quebra de linha para identação
function listarTarefas() {
// abrindo a função listarTarefas
    listaDeTarefas.forEach((item, i) => {
    // percorrendo todos os itens da lista de tarefa e também pegando o indice da posição que ta naquele momento
        console.log(`
            ${i + 1} - Tarefa: ${ item.descricao } | Status: ${ item.completa ? 'Completa' : 'Incompleta' }.
        `);
        // printado de forma formatada a posição do item e a tarefa e descrição, também fazendo verificação se o item é true coloca Completa, senão incompleta 
    });
    //fechando função forEach da listaDeTarefas

    // quebra de linha para identação
    return;
    // dando um return para para garantir o fim da execução desta função
}
// fechando a função

// quebra de linha para identação
function removerTarefa(descricao) {
// abrindo função de remover tarefa tendo a descrição como parametro
    listaDeTarefas = listaDeTarefas.filter(item => item.descricao !== descricao);
    // fazendo a lista receber ela mesma, mas se achar um item que tenha a descrição igual ignore ou seja, "exclua"
    return;
    // dando um return para para garantir o fim da execução desta função
}
// fechando a função

// quebra de linha para identação
/* consoles de teste

saudarUsuario(nome, idade);
adicionarTarefa('Testando, teste teste teste legal');
adicionarTarefa('Fazer o trabalho de Fron-end o mais rapido que der antes que esqueça');
adicionarTarefa('Fazer o trabalho de Fron-end o mais rapido que der antes que esqueça');
marcarComoCompleta(1);
listarTarefas();
removerTarefa('Fazer o trabalho de Fron-end o mais rapido que der antes que esqueça');
console.log('-----------')
marcarComoCompleta(0)
listarTarefas();

*/

// quebra de linha para identação
saudarUsuario(nome, idade);
// chamando a função saudarUsuario passando as variaveis nome e idade
listarTarefas();
//chamando a função listar tarefas

// quebra de linha para identação
if (listaDeTarefas.length === limiteTarefas) console.log('⚠ Você atingiu o limite de tarefas.');
// fazendo uma verificação se o tamanho da lista é igual ao limite de itens, se for printa que atingiu o limite
