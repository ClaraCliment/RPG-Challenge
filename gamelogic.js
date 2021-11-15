// import { Perso } from "./character.js"


// Basiques ---------------------------------------------------------------------------------

// Visuels de chaque type de perso
const img_perso = {
    human: "./ressources/img/human.png",
    orc: "./ressources/img/orc.png",
    elf: "./ressources/img/elf.png",
    vampire: "./ressources/img/vampire.png",
    ghost: "./ressources/img/ghost.png"
}


// FICHE Player 1 ****************************************************
var name1_container = document.getElementById("player1_name");
var item1_container = document.getElementById("player1_item");
var race1_container = document.getElementById("player1_race");

// Forms
var form_1 = document.getElementById("form_player1");
// nom dans le form 
var name1 = document.getElementById('name_1');
var item1 = document.getElementById('items1');
var race1 = document.getElementById('race1');

// Profil des joueurs 
var item1_final;
var race1_final;
var item2_final;
var race2_final;
var player1;
var item1_object;
var player2;
var item2_object;
var vie_1;
var vie_2;


// Image du perso emplacement
var img1_container = document.querySelector('#perso1 img');

form_1.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hi, " + name1.value + " the " + race1.value + ", take your " + item1.value + " and let's fight!");
    
    // Création objects Player1 & Item1
    item1_final = item1.value;
    race1_final = race1.value;
    player1 = new Person(race1_final, item1_final);
    item1_object = new Item(item1_final);
    console.log(player1.maxHealth())
    vie_1 = player1.maxHealth();
    score_1.innerHTML = "❤️ Life points: " + vie_1;
    healthbar_1.style.width = vie_1 + "px";
    health1_level.style.width = vie_1 + "px";
    
    console.log(item1_object.dodge())
    
    form_1.style.display = "none";
    name1_container.textContent = name1.value;
    item1_container.textContent = item1.value;
    race1_container.textContent = race1.value;
    // placer la bonne image selon la race
    if(race1.value == "Vampire") { 
        img1_container.src = img_perso.vampire;
    } else if (race1.value == "Human") {
        img1_container.src = img_perso.human;
    }  else if (race1.value == "Elf") {
        img1_container.src = img_perso.elf;
    } else {  img1_container.src = img_perso.orc;
    }
    // cacher les formulaires si les 2 ont été submit
    if(form_2.style.display == "none") {
        creation_panels.style.display = "none";
    }
})

// FICHE Player 2 **********************************************************
var name2_container = document.getElementById("player2_name");
var item2_container = document.getElementById("player2_item");
var race2_container = document.getElementById("player2_race");

// Forms
var form_2 = document.getElementById("form_player2");
// nom dans le form 
var name2 = document.getElementById('name_2');
var item2 = document.getElementById('items2');
var race2 = document.getElementById('race2');

var form_2 = document.getElementById("form_player2");

// Image du perso 2 emplacement
var img2_container = document.querySelector('#perso2 img');

form_2.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hi, " + name2.value + " the " + race2.value + ", take your " + item2.value + " and let's fight!");
    
    // Création objects Player1 & Item1
    item2_final = item2.value;
    race2_final = race2.value;
    player2 = new Person(race2_final, item2_final);
    item2_object = new Item(item2_final);
    console.log(player2.maxHealth())
    vie_2 = player2.maxHealth();
    score_2.innerHTML = "❤️ Life points: " + vie_2;
    healthbar_2.style.width = vie_2 + "px";
    health2_level.style.width = vie_2 + "px";
    
    form_2.style.display = "none";
    name2_container.textContent = name2.value;
    item2_container.textContent = item2.value;
    race2_container.textContent = race2.value;
    // placer la bonne image selon la race
    if(race2.value == "Vampire") { 
        img2_container.src = img_perso.vampire;
    } else if (race2.value == "Human") {
        img2_container.src = img_perso.human;
    }  else if (race2.value == "Elf") {
        img2_container.src = img_perso.elf;
    } else {  img2_container.src = img_perso.orc;
    }
    // cacher les formulaires si les 2 ont été submit
    if(form_1.style.display == "none") {
        creation_panels.style.display = "none";
    }
 })

// Scores & co

// Viser les boutons
var pannels = document.getElementById("pannel_buttons");

// Boutons joueur 1
var hit_1 = document.getElementById("hit_1");
var heal_1 = document.getElementById("heal_1");
var yield_1 = document.getElementById("yield_1");
// Boutons joueur 2
var hit_2 = document.getElementById("hit_2");
var heal_2 = document.getElementById("heal_2");
var yield_2 = document.getElementById("yield_2");

// Compteur qui permet de savoir qui doit jouer (O ou 1)
var turn = 0; 
// constater si un bouton a été clické // Si 0 => joue player1 sinon player2
hit_1.onclick = function() { 
    turn = 1;
};
heal_1.onclick = function() { 
    turn = 1;
};
yield_1.onclick = function() { 
    turn = 1;
};

hit_2.onclick = function() { 
    turn = 0;
};
heal_2.onclick = function() { 
    turn = 0;
};
yield_2.onclick = function() { 
    turn = 0;
};


// Le jouer 1 commence tjs le jeu donc les commandes du 2e jouer son désactivées
hit_2.disabled = true;
heal_2.disabled = true;
yield_2.disabled = true;
img2_container.style.filter = "saturate(0)";

// Puis selon ils jouent le compteur turn permet d'activer désactiver les commandes du jouer correct
pannels.addEventListener("click", () => {
    if (turn == 0) {
        // On désactive les boutons du joueur 2
        hit_2.disabled = true;
        heal_2.disabled = true;
        yield_2.disabled = true;
        img2_container.style.filter = "saturate(0)";

        hit_1.disabled = false;
        heal_1.disabled = false;
        yield_1.disabled = false;
        img1_container.style.filter = "none";
        player1_vampire ()
    
    } else {
        // On désactive les boutons du joueur 1
        hit_1.disabled = true;
        heal_1.disabled = true;
        yield_1.disabled = true;
        img1_container.style.filter = "saturate(0)";

        hit_2.disabled = false;
        heal_2.disabled = false;
        yield_2.disabled = false;
        img2_container.style.filter = "none";
        player2_vampire ()
    }
})



// CONFIG PERSOS ET ITEMS **********************************************************************
// *********************************************************************************************



// Texte descriptif
var description = document.getElementById("description");

// Placement textes score
var score_1 = document.getElementById("player1_health");
var score_2 = document.getElementById("player2_health");

// Health bar container
var healthbar_1 = document.getElementById("healthbar_1");
var healthbar_2 = document.getElementById("healthbar_2");

// Health bar
var health1_level = document.getElementById("health1_level");
var health2_level = document.getElementById("health2_level");

// Si le joeur 1 est un vampire
function player1_vampire () {
if (player1.race == "Vampire") { 
    vie_1 += vie_2/10;
    vie_2 -= vie_2/10;
    description.innerHTML = name1_container.innerHTML + " is a vampire and steals 10% of the opponent's life!";
} }
// Si le joeur 2 est un vampire
function player2_vampire () {
if (player2.race == "Vampire") { 
    vie_2 += vie_1/10;
    vie_1 -= vie_1/10;
    description.innerHTML = name2_container.innerHTML + " is a vampire and steals 10% of the opponent's life!";
}}

// Si le player 1 joue
hit_1.addEventListener("click", ()=> {
    if (player2.iAmElfDodge() == true) {
        description.innerHTML = "Your ennemi is a vampire and he deflects your attack!";
        vie_1 -= 5;
    } else {
        if (player2.race == "Human") {
            description.innerHTML = "Your ennemi is human and therefore looses less life! ";
            vie_2 -= 8;
            vie_2 -= item1_object.damage();
        } else {
            description.innerHTML = "Your ennemi looses 10 points of life! ";
            vie_2 -= 10;
            vie_2 -= item1_object.damage();   
        }
    } 
    // Mise à jour des infos sur l'interface
    score_1.innerHTML = "❤️ Life points: " + vie_1;
    score_2.innerHTML = "❤️ Life points: " + vie_2;
    health1_level.style.width = vie_1 + "px";
    health2_level.style.width = vie_2 + "px";
})

// Player 1 heals himself
heal_1.addEventListener("click", ()=> {

    if (item1_object.item == "Staff") {
        vie_1 += 12;
    } else {
        vie_1 += 10 
    }
    score_1.innerHTML = "❤️ Life points: " + vie_1;
    health1_level.style.width = vie_1;
    description.innerHTML = name1_container.innerHTML + " heals!";

})

// Player 1 gives up
yield_1.addEventListener("click", ()=> {
    description.innerHTML = name1_container.innerHTML + " runs away! GAME OVER.";
    img1_container.src = img_perso.ghost;

})





// Si le player 2 joue
hit_2.addEventListener("click", ()=> {
    if (player1.iAmElfDodge() == true) {
        description.innerHTML = "Your ennemi is a vampire and he deflects your attack!";
        vie_2 -= 5;
    } else {
        if (player1.race == "Human") {
            description.innerHTML = "Your ennemi is human and therefore looses less life! ";
            vie_1 -= 8;
            vie_1 -= item2_object.damage();
        } else {
            description.innerHTML = "Your ennemi looses 10 points of life! ";
            vie_1 -= 10;
            vie_1 -= item2_object.damage();   
        }
    } 
    // Mise à jour des infos sur l'interface
    score_1.innerHTML = "❤️ Life points: " + vie_1;
    score_2.innerHTML = "❤️ Life points: " + vie_2;
    health1_level.style.width = vie_1 + "px";
    health2_level.style.width = vie_2 + "px";
})

// Player 1 heals himself
heal_2.addEventListener("click", ()=> {

    if (item2_object.item == "Staff") {
        vie_2 += 12;
    } else {
        vie_2 += 10 
    }
    score_2.innerHTML = "❤️ Life points: " + vie_2;
    health2_level.style.width = vie_2;
    description.innerHTML = name2_container.innerHTML + " heals!";

})

// Player 1 gives up
yield_2.addEventListener("click", ()=> {
    description.innerHTML = name2_container.innerHTML + " runs away! GAME OVER.";
    img2_container.src = img_perso.ghost;

})

