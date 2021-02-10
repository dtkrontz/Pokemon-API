const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
let url;


const searchForm = document.querySelector('form');
const searchTerm = document.querySelector('.search');
const pokemonList = document.querySelector('ul');
const card = document.getElementsByClassName('.card')
const sectionOne = document.querySelector('.displayImgOne');
const sectionTwo = document.querySelector('.displayImgTwo');
const sectionThree = document.querySelector('.displayImgThree');
const sectionFour = document.querySelector('.displayImgFour');
const sectionFive = document.querySelector('.displayImgFive');
const sectionSix = document.querySelector('.displayImgSix');
const sectionSeven = document.querySelector('.displayImgSeven');
const sectionEight = document.querySelector('.displayImgEight');
const sectionNine = document.querySelector('.displayImgNine');
const container = document.querySelector('.containerOne');
const noResult = document.querySelector('.noResult');
const limit = '?limit=60&offset=60';
const background = document.querySelector('.battleground');

searchForm.addEventListener('submit', findPokemon);
searchForm.addEventListener('submit', displayFighter);

function findPokemon(e) {
    // console.log(e);
    // e.preventDefault();
    let pokemon = searchTerm.value.toLowerCase();
    url = `${baseUrl}/${pokemon}`;
    if (pokemon == '' || pokemon == null) {
        console.log('please search');
        clearGrid();
    } else {
        
        //console.log(url);
    
        fetch(url)
        .then(function (response) {
            return response.json()
        }) 
        .then(function (json) {
            //console.log(json);
            displayResults(json);
        })
    }
}
//const pokemon = ;

//const pokemonLocation = ;

function displayResults(poke) {
    console.log ('Display Results', poke);
    // while (sectionOne.firstChild) {
    //     sectionOne.removeChild(sectionOne.firstChild);
    // }
    // while (sectionTwo.firstChild) {
    //     sectionTwo.removeChild(sectionTwo.firstChild);
    // }
    sectionOne.innerHTML = 'Your Pokemon:' + ' ' + poke.name[0].toUpperCase() + poke.name.substring(1) + '<br>' + ' ' + 'ID:' + ' ' + poke.id;
    if (poke.types.length == 2) {
        sectionTwo.innerHTML = 'Type:' + ' ' + poke.types[0].type.name + '/' + poke.types[1].type.name;
    } else {
        sectionTwo.innerHTML = 'Type:' + ' ' + poke.types[0].type.name;
    }
    // sectionTwo.innerHTML = 'Type:' + ' ' + poke.types[0].type.name + '/' + poke.types[1].type.name;
    sectionThree.innerHTML = 'Height:' + ' ' + poke.height + ' ' + ' ' + ' ' + '<br>' + 'Weight:' + ' ' + poke.weight;
    sectionFour.innerHTML = `<img src=${poke.sprites.front_default} class="josh" />`;
    // sectionFour.innerHTML = `<img src=${poke.sprites.front_default} style="width: 120px; height: 300;"/>`;
    background.innerHTML = '<img src="assets/battlefield.png" style="width: 830px; height:400px"/>';
    sectionFive.innerHTML = `<img src=${poke.sprites.back_default} class="josh" />`;
}

function displayFighter (enemy) {
    enemy.preventDefault();
    let number = getRandom(898);
    url = `${baseUrl}/${number}`;
    // console.log (url);
    if (searchTerm.value == '' || searchTerm.value == null) {
        console.log('please search');
        clearGrid();
    } else {
        fetch(url)
        .then(function (response) {
            return response.json()
        }) 
        .then(function (json) {
            // console.log(json);
            displayResultsTwo(json);
        })
    }
}

function clearGrid() {
    sectionOne.innerHTML = '';
    sectionTwo.innerHTML = '';
    sectionThree.innerHTML = '';
    sectionFour.innerHTML = '';
    sectionFive.innerHTML = '';
    sectionSix.innerHTML = '';
    sectionSeven.innerHTML = '';
    sectionEight.innerHTML = '';
    sectionNine.innerHTML = '';
    background.innerHTML = '';
}

function displayResultsTwo(enemy) {
    console.log ('Display Results', enemy);
    sectionSix.innerHTML = `<img src=${enemy.sprites.front_default} class="josh" />`;
    sectionSeven.innerHTML = 'Contender:' + ' ' + enemy.name[0].toUpperCase() + enemy.name.substring(1) + '<br>' + ' ' + 'ID:' + ' ' + enemy.id;
    if (enemy.types.length == 2) {
        sectionEight.innerHTML = 'Type:' + ' ' + enemy.types[0].type.name[0].toUpperCase() + enemy.types[0].type.name.substring(1) + '/' + enemy.types[1].type.name[0].toUpperCase() + enemy.types[1].type.name.substring(1);
    } else {
        sectionEight.innerHTML = 'Type:' + ' ' + enemy.types[0].type.name[0].toUpperCase() + enemy.types[0].type.name.substring(1);
    }
    // sectionTwo.innerHTML = 'Type:' + ' ' + enemy.types[0].type.name + '/' + enemy.types[1].type.name;
    sectionNine.innerHTML = 'Height:' + ' ' + enemy.height + ' ' + ' ' + ' ' + '<br>' + 'Weight:' + ' ' + enemy.weight;
}

function getRandom (max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/*
function firstLetterCap (poke) {
    if (poke !== '') {
        console.log("Search");
    } else {
        return poke.charAt(0).toUpperCase() + poke.slice(1);
    } 
    
}

console.log (firstLetterCap('hi'));
*/
