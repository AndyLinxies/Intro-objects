let pikachu = { //declaration d'object
    nom: "pikachu", //declaration de propriété avec sa valeur
    niveau: 32,
    pointDeVie: 132,
    attack1: "éclair",
    attack2: "rugissement",
    eclair(){ //declaration d'une methode lié a l'object
        console.log(`${this.nom} lance attaque ${this.attack1}`);
    }
}

pikachu.eclair(); //utilisation de la methode
console.log(pikachu["niveau"]); //affichage de la propriété niveau

pikachu["type"] = "Électrik"; //création d'une propriété en dehors de l'object "methode crochet"
pikachu.type = "Électrik"; //création d'une propriété en dehors de l'object "methode point"

pikachu.nom = "caca"; //modification d'une propriété existante

delete pikachu.attack2;

console.log(pikachu); //affichage entier de l'object

