
/***************************Random Characters **********************************/
let image = document.querySelectorAll(".image")
let charaName = document.querySelectorAll(".name")
let charaStatuts = document.querySelectorAll(".status")
let charaGender = document.querySelectorAll(".gender")
let charaSpecies = document.querySelectorAll(".species")

let changeCharactere = async()=> {
    let randomNumber = Math.round(Math.random()*826)+1;
    console.log(randomNumber);
    let requestString =`https://rickandmortyapi.com/api/character/${randomNumber}`;

    let data = await fetch(requestString);
    console.log(data);

    let response = await data.json();
    return response;
    // console.log(response);
};
/*******************************Random 12 characters*****************************/
    let allCharacters = async () =>{
        for (let i=0;i<image.length;i++){
            let character = await changeCharactere();
            image[i].src = character.image;
            charaName[i].textContent=character.name;
            charaStatuts[i].textContent=character.status;
            charaGender[i].textContent=character.gender;
            charaSpecies[i].textContent=character.species;

        }
    };

    window.addEventListener("load",()=>{
        allCharacters();
    });

    document.querySelector(".btn1").addEventListener("click",()=>{
        allCharacters();
    });

    
/*******************************Filter Dead characters*****************************/
    let filterDeadCharacters = async () => {
        let characters = [];
        for (let i = 0; i < image.length; i++) {
            let character = await changeCharactere();
            if (character.status === "Dead") {
                characters.push(character);
            } else {
                // If the character fetched is not dead, try again until we find a dead character.
                i--;
            }
        }
        for (let i = 0; i < image.length; i++) {
            image[i].src = characters[i].image;
            charaName[i].textContent = characters[i].name;
            charaStatuts[i].textContent = characters[i].status;
            charaGender[i].textContent = characters[i].gender;
            charaSpecies[i].textContent = characters[i].species;
            
        }
    };
    
    document.querySelector(".btn3").addEventListener("click", () => {
        filterDeadCharacters();
    });

/*******************************Filter Alive characters*****************************/
let filterAliveCharacters = async () => {
    let characters = [];
    for (let i = 0; i < image.length; i++) {
        let character = await changeCharactere();
        if (character.status === "Alive") {
            characters.push(character);
        } else {
            // If the character fetched is not Alive, try again until we find an alive character.
            i--;
        }
    }
    for (let i = 0; i < image.length; i++) {
        image[i].src = characters[i].image;
        charaName[i].textContent = characters[i].name;
        charaStatuts[i].textContent = characters[i].status;
        charaGender[i].textContent = characters[i].gender;
        charaSpecies[i].textContent = characters[i].species;
        
    }
};

document.querySelector(".btn2").addEventListener("click", () => {
    filterAliveCharacters();
});

/*******************************Filter Statut Unknown characters*****************************/
let filterUnknownCharacters = async () => {
    let characters = [];
    for (let i = 0; i < image.length; i++) {
        let character = await changeCharactere();
        if (character.status === "unknown") {
            characters.push(character);
        } else {
            // If the character fetched have not statuts unknown, try again until we find a statuts unknown character.
            i--;
        }
    }
    for (let i = 0; i < image.length; i++) {
        image[i].src = characters[i].image;
        charaName[i].textContent = characters[i].name;
        charaStatuts[i].textContent = characters[i].status;
        charaGender[i].textContent = characters[i].gender;
        charaSpecies[i].textContent = characters[i].species;
        
    }
};

document.querySelector(".btn4").addEventListener("click", () => {
    filterUnknownCharacters();
});
/*******************************************Function button toggle***************************/  
let buttons = document.querySelectorAll(".btn1, .btn2, .btn3, .btn4");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("clickosss");
        
        // Deactivate all buttons.
        buttons.forEach(btn => {
            btn.classList.remove("buttonClicked");
        });

        // Activate only the clicked button.
        button.classList.add("buttonClicked");
    });
});
/*******************************************Function Modal***************************/
function toggle (){
    
    let blur = document.querySelector(".cardSection.blur");
    blur.classList.toggle("active");

    let popup = document.querySelector(".popup");
    popup.classList.toggle("active");
}

