// adiciona um novo elemento com um texto e class especifico;
function newChild(type, text, classs) {
    let newChildItem = document.createElement(type);
    newChildItem.innerText = text;
    if (classs !== '') {
        newChildItem.className = classs;
    }
    return newChildItem;
}

function selectExercicio(valor) {
    let sum = 0;
    for(value of valor) {
        sum += value;
    }
    let aux = Math.floor(Math.random()*sum);
    for(let index = 0; index < valor.length; index += 1) {
        aux -= valor[index];
        if (aux < 0){
            return index;
        }
    }
    return 'problem';
}

let exercise = selectExercicio(valor);
console.log(exercise);

let body = document.querySelector('body');
body.append(newChild('h1', titulos[exercise], 'title'));
body.append(newChild('p', questions[exercise], 'title'));
body.append(newChild('p', respostas[exercise], 'title'));