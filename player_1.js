// Fiche personnage de base (briefing) *********************************************************
// *********************************************************************************************
// 10% de la vie de l'ennemi // faut inserer 10% de la vie de l'ennemi et lui enlever (en temps réel)
var dix_ennemi = 0;

//Use this script to generate your character
function Person(race,item){
    this.race = race;
    this.item = item;
    
    this.damage = 10;
    this.healing = 10;

    this.maxHealth = function(){
        if (this.race == "Orc") {
            console.log("The orc as a longer life!")
            return 140;
        } else if (this.race == "Vampire") {
            console.log("The vampire steals 10% of the ennemy's life before acting")
            return (100 + dix_ennemi);
        } else { return 100; }
    };
    
    this.iAmElfDodge = function(){
        if (this.race == "Elf") { 
           if (hasard < 3) {
                console.log("The elf has 30% chances to deflect your attack and take you 50% of it!")
                return true
            } else { return false }
        } else { return false };
    }
}

// hasard variable
var hasard = Math.floor(Math.random() * 10);


function Item(item) {
    this.item = item;
    this.heal = function(){
        // if it returns true and you heal yourself +20% healing
        if (this.item == "Staff") {
            console.log("With the staff you gain 20% of healing!")
            return true;
        } else { return false}
    };
    this.damage = function(){
        if (this.item == "Sword"  || this.item == "Bow") {
            // if "Sword" 30% +damage / if "Bow" 30% chance attack x2;
            if(this.item == "Sword") {
                console.log("The sword damages 30% more")
                return 3
            } else { 
                if (hasard < 3) {
                console.log("The bow has double the attack")
                return 10 
                } else { return 0}
            }
        } else { return false}
    };
    this.dodge = function(){
        // verify this info in the ennemi profile // true? his health doesn't change
        if (this.item == "Boots") {
            if (hasard < 3) {
                console.log("Boots dodges the attack")
                return true;
            } else { return false; }
        } else { return false }
    };
}