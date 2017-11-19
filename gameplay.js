var players = [],
    colors = ["red", "green", "blue", "yellow"],
    maxPlayers = 4,
    gameStarted = false,
    move = 0,
    whoPlays = ["Red", "Blue", "Green", "Yellow"],
    moved = false,
    cube = [1, 2, 3, 4, 5, 6],
    cubeClicked = true,
    firstTime = true,
    turn = false; // nije jos iskoriscena

// Boki uradila funkciju za bacanje kockice, sada ima opciju vrtenja random slikice kockice
// Sad treba srediti za ponovni klik ukoliko se dobije 6
function kocka() {
    console.log(whoPlays[move]);
    document.getElementById("onMove" + whoPlays[move]).addEventListener("click", function () {
        console.log(whoPlays[move]);
        var counter = 0,
            randomNumber;
        if (cubeClicked == true) {
            var cubeClick = setInterval(function () {
                randomNumber = cube[Math.floor(Math.random() * 6)];
                images = "/slike/" + randomNumber + ".jpg",
                    document.getElementById("onMove" + whoPlays[move - 1]).style.background = "url(" + images + ")";
                counter++;
                if (counter == 20) {
                    clearInterval(cubeClick);
                }
                cubeClicked = false;

            }, 100);
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
    document.getElementById("newGame").addEventListener("click", function () {
        if (gameStarted == false) {
            var newPlayer = {},
                newGame = confirm("Zelite novog igraca?");
            if (newGame == true) {
                newPlayer.name = chooseName();
                console.log(name);
                newPlayer.color = chooseColor();
                players = newPlayer;
                console.log(name);
                document.getElementById(newPlayer.color + "Player").innerHTML = newPlayer.name;
                document.getElementById("newGame").innerHTML = "New Player";

            }
            console.log(players);
        }
    });
}

// Vraca boju igraca koji je na potezu
function onMove() {
    if (move == 4) {
        move = 0;
        return whoPlays[move];
    } else {
        return whoPlays[move];
    }
}

// Izvrsava postavljanje roll.jpg sto je oznaka da je igrac koji ima potrebnu boju, na potezu
function changePlayer() {
    var i = onMove();
    // onMove vraca boju koju koristimo da pronadjemo potreban id
    document.getElementById("onMove" + i).style.background = "url(/slike/roll.jpg)";
}

// Uz pomoc funkcije clearPlayer cistimo roll.jpg sa prethodnog igraca
function clearPlayer() {
    var i = onMove();
    // poseban slucaj je kad je prethodni igrac žuti, trabalo bi whoPlays[move - 1] ali to jednako -1 a to nije žuti
    // pa smo morali da mu rucno skinemo roll.jpg  -> "onMove" + "Yellow"
    // za ostale boje to ne vazi
    if (i == "Red") { 
        document.getElementById("onMove" + "Yellow").style.background = "";
    }
    else {
        document.getElementById("onMove" + whoPlays[move - 1]).style.background = "";
    }
}
// Izvlaci sa slike kockice broj koji cemo koristiti za pomeranje figure
function calculateMoves() {
    var currentPlayer = whoPlays[move-1];
    var moveCounter = document.getElementById("onMove" + currentPlayer).style.background;
    var stringMoveCounter = moveCounter.substr(12, 1);
    return stringMoveCounter;
}

// sa ovom f-jom "pomeramo" figuru tako sto farbamo odredjeni id sa odredjenom bojom
// potrebne popravke
function moveFigure() {
    var plays = onMove();
    document.getElementById("path0").addEventListener("click", function () {
        var figure = calculateMoves();

        document.getElementById("path" + figure).style.background = plays;
        console.log(plays);
        console.log(figure);
    });
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
            changePlayer();
            kocka();
        }
        else {
            document.getElementById("start").innerHTML = "Next Player";
            cubeClicked = true;
            changePlayer();
            kocka();
            moveFigure();
            clearPlayer();
            move++;
        }
    });
}
// Inicijalizacija igre
function init() {
    addPlayers();
    startGame();
}

init();



