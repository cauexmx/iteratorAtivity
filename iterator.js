const hobbies = ['Futebol', 'Jogar', 'Assistir', 'Ler', 'Zap'];

hobbies.forEach(function(hobby) {
console.log("Olá, eu sou o hobby mais maneiro de todos, " + hobby + "!");
});

const bookTitles = hobbies.map(function(hobby) {
    return "O incrível mundo de " + hobby;
    });
console.log(bookTitles);

const dHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 'A';
    } );

console.log(dHobbies)

const LessHobbies = hobbies.filter(function(hobby) {
    return hobby.length < 5;
    } );

console.log(LessHobbies)

const watchingPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'Assistir';
    });
console.log("Assistir está na posição: " + watchingPosition);


const hasLHobby = hobbies.some(function(hobby) {
    return hobby[0] === 'L'; });     
console.log("Eu tenho um hobby que começa com 'L'? " + hasLHobby);


const allShorter = hobbies.every(function(hobby) { return hobby.length < 15;});
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShorter);

const LowerLetter = hobbies.every(function(hobby) { return hobby.toLowerCase();});
console.log("Todos os meus hobbies tem letra minúscula? " + LowerLetter);

const sevenLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 7; });
    console.log("Meu primeiro hobby com 7 letras é: " + sevenLetterHobby);

const zLetterHobby = hobbies.find(function(hobby) {
    return hobby[0] === 'Z'; });
    console.log("Meu primeiro hobby com z letras é: " + zLetterHobby);
    
const firstThreeHobbies = hobbies.slice(0, 3); 
console.log("Meus três primeiros hobbies são: ", firstThreeHobbies);

const SecToFourthHobbies = hobbies.slice(1, 5); 
console.log("Do segundo ao quarto são: ", SecToFourthHobbies);

