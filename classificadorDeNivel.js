let nomeDoHeroi = "Heitor";
let nivelDoHeroi = 1000000;

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

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}.`)