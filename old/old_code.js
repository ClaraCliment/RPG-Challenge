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

// Image du perso emplacement
var img1_container = document.querySelector('#perso1 img');

form_1.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hi, " + name1.value + " the " + race1.value + ", take your " + item1.value + " and let's fight!");
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
    }
})


// CONFIG PERSOS ET ITEMS **********************************************************************
// *********************************************************************************************
// Chances -----------------

// Un chiffre au hasard de 0 à 9;
var hasard = Math.floor(Math.random() * 10);




// Health variables
var health_1 = 100;
var health_2 = 100;
// Texte descriptif
var description = document.getElementById("description");

// Placement textes score
var score_1 = document.getElementById("player1_health");
var score_2 = document.getElementById("player2_health");
console.log(score_1)

// Health bar
var health1_level = document.getElementById("health1_level");
var health2_level = document.getElementById("health2_level");

// Boutons action basique

// Si le player 1 joue
hit_1.addEventListener("click", ()=> {
    health_2 -= 10;
    level1();
    level2();
    score_2.innerHTML = "❤️ Life points: " + health_2;
    description.innerHTML = name1_container.innerHTML + " attacks " + name2_container.innerHTML + "!!";

})
heal_1.addEventListener("click", ()=> {
    health_1 += 10;
    level1();
    level2();
    score_1.innerHTML = "❤️ Life points: " + health_1;
    description.innerHTML = name1_container.innerHTML + " heals himself/herself.";

})
yield_1.addEventListener("click", ()=> {
    description.innerHTML = name1_container.innerHTML + " runs away! GAME OVER.";
    img1_container.src = img_perso.ghost;

})

// Si le player 2 joue
hit_2.addEventListener("click", ()=> {
    health_1 -= 10;
    level1();
    level2();
    score_1.innerHTML = "❤️ Life points: " + health_1;
    description.innerHTML = name2_container.innerHTML + " attacks " + name1_container.innerHTML + "!!";

})
heal_2.addEventListener("click", ()=> {
    health_2 += 10;
    level1();
    level2();
    score_2.innerHTML = "❤️ Life points: " + health_2;
    description.innerHTML = name2_container.innerHTML + " heals himself/herself.";

})
yield_2.addEventListener("click", ()=> {
    description.innerHTML = name2_container.innerHTML + " runs away! GAME OVER.";
    img2_container.src = img_perso.ghost;

})

// Levels functions
function level1() {
    if(health_1 <= 100) {
        health1_level.style.width = health_1 + "%";
    } else { health1_level.style.width = "100%";}
    
}
function level2() {
    if(health_2 <= 100) {
    health2_level.style.width = health_2 + "%"; 
    } else { health2_level.style.width = "100%";}
}

