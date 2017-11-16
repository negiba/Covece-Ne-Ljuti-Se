var players = [],
    colors = ["red", "green", "blue", "yellow"],
    maxPlayers = 4,
    gameStarted = false,
    onMove = ["red", "blue", "green", "yellow"],
    moved = false,
    cube = [1, 2, 3, 4, 5, 6],
    cubeClicked = true,
    firstTime = true,
    turn = false; // nije jos iskoriscena

// Funkcija za bacanje kockice, nema opciju vrtenja random brojeva vec samo izbacuje random broj
// Ima opciju za ponovni klik ukoliko se dobije 6
function kocka() {
    document.getElementById("middle").addEventListener("click", function () {
        var randomNumber = cube[Math.floor(Math.random() * 6)];
        console.log(randomNumber);
        if (cubeClicked == true) {
            if (randomNumber == 6) {
                document.getElementById("middle").innerHTML = randomNumber;
                cubeClicked = true;
            }
            else {
                document.getElementById("middle").innerHTML = randomNumber;
                cubeClicked = false;
            }
        }
    });
}
// Funkcija za biranje imena igraca
function chooseName() {
    while (name == null || name == "") {
        var name = prompt("Upisite ime");
    }
    return name;
}
// Funkcija za biranje boje igraca
function chooseColor() {
    while (color != "green" && color != "red" && color != "yellow" && color != "blue") {
        var color = prompt("Izaberite boju" + colors);
    }
    return color;
}
// Funkcija za dodavanje igraca
// Ne radi najbolje, ako se izabere ista boja gazi prethodnog
// Dodavati igrace u niz!
// Treba popraviti!!!
function addPlayers() {
    document.getElementById("addPlayers").addEventListener("click", function () {
        if (gameStarted == false) {
            console.log(gameStarted);
            var newPlayer = {},
                newGame = confirm("Zelite novog igraca?");
            if (newGame == true) {
                newPlayer.name = chooseName();
                console.log(name);
                newPlayer.color = chooseColor();
                players = newPlayer;
                console.log(name);
                document.getElementById(newPlayer.color + "Player").innerHTML = newPlayer.name;

            }
            console.log(players);
        }
    });
}

// Promena igraca
// Treba zavrsiti
function changePlayer() {

}

// Pomeranje figura, izvrsiti na click
// Treba zavrsiti
function moveFigure() {
    
}

//Provera da li je na polju na koje treba da stanemo vec neko,
// ukoliko jeste vratiti ga u njegovu bazu
// Treba zavrsiti
function returnToBase() {
    
}

//Provera da li je i poslednja figura usla u kucicu
// ukoliko jeste, objava pobede
// Treba zavrsiti
function victoryMove() {
    
}

// Pisanje rezultata
// ime igraca i rezultat cuvamo u local storage
// Treba zavrsiti
function finalResult() {
    
}

// Pocetak igre
function startGame() {
    document.getElementById("start").addEventListener("click", function () {
        if (firstTime != true) {
            gameStarted = true;
            kocka();
            console.log(gameStarted);
        }
        else {
            document.getElementById("start").innerHTML = "Next Player";
            cubeClicked = true;
            kocka();
        }
    });


}
// Inicijalizacija igre
function init() {
    addPlayers();
    startGame();
}
init();



