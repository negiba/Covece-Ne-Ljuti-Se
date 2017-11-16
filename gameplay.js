var players = [],
    colors = ["red", "green", "blue", "yellow"],
    maxPlayers = 4,
    gameStarted = false,
    onMove = ["red", "blue", "green", "yellow"],
    moved = false,
    cube = [1, 2, 3, 4, 5, 6],
    cubeClicked = true;

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

function startGame() {
    document.getElementById("start").addEventListener("click", function () {
        gameStarted = true;
        console.log(gameStarted);
    });
    

}
function init() {
    addPlayers();
    startGame();

}
init();



