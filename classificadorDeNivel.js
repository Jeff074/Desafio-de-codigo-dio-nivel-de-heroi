let nomeDoHeroi = "Heitor";
let nivelDoHeroi = 5000;

if (nivelDoHeroi <=1000){
    nivelDoHeroi = "Ferro";
}else if (nivelDoHeroi <= 2000){
    nivelDoHeroi = "Bronze";
}else if (nivelDoHeroi <= 5000){
    nivelDoHeroi = "Prata";
}else if (nivelDoHeroi <= 7000){
    nivelDoHeroi = "Ouro";
}else if (nivelDoHeroi <= 8000){
    nivelDoHeroi = "Platina";
}else if (nivelDoHeroi <= 9000){
    nivelDoHeroi = "Ascendente";
}else if (nivelDoHeroi <=10000){
    nivelDoHeroi = "Imortal";
}else{
    nivelDoHeroi = "Radiante";
};

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}.`);

//adicionando estrutura switch

let heroName = "Arthur";
let heroLevel = 8000;
let heroRank;

switch(true) {
    case heroLevel <= 1000:
        heroRank = "Ferro";
        break;

    case heroLevel <= 2000:
        heroRank = "Bronze";
        break;

    case heroLevel <= 5000:
        heroRank = "Prata";
        break;

    case heroLevel <= 6000:
        heroRank = "Ouro";
        break;

    case heroLevel <= 7000:
        heroRank = "Platina";
        break;

    case heroLevel <= 8000:
        heroRank = "Imortal";
        break;
    default:
        heroRank = "Radiante";            
}

console.log(`O Herói de nome ${heroName} está no nível de ${heroRank}.`);
