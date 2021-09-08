import { alou } from './exercises.js';

// adiciona um novo elemento com um texto e class especifico;
function newChild(type, text, classs) {
    let newChildItem = document.createElement(type);
    newChildItem.innerText = text;
    if (classs !== '') {
        newChildItem.className = classs;
    }
    return newChildItem;
}

console.log(exercises);
alou();
// cria um titulo na pagina

//Adicione a classe description nas 3 tags h3 criadas;
//Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
//Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
//Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
//Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.