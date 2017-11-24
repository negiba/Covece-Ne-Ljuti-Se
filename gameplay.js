var players = [],
    colors = ["red", "green", "blue", "yellow"],
    numPlayers = 0,
    gameStarted = false,
    move = 0,
    whoPlays = ["Red", "Blue", "Green", "Yellow"],
    moved = false,
    cube = [1, 2, 3, 4, 5, 6],
    cubeClicked = false,
    firstTime = true,
    turn = false; // nije jos iskoriscena

// Boki uradila funkciju za bacanje kockice, sada ima opciju vrtenja random slikice kockice
// Vrti koliko god puta kliknemo, srediti uslove
// Sad treba srediti za ponovni klik ukoliko se dobije 6
function kocka() {
    console.log(cubeClicked);
    if (cubeClicked == false) {
        document.getElementById("onMove" + whoPlays[move]).addEventListener("click", function () {
            console.log(whoPlays[move]);
            var counter = 0,
                randomNumber;
            var cubeClick = setInterval(function () {
                randomNumber = cube[Math.floor(Math.random() * 6)];
                images = "/slike/" + randomNumber + ".jpg",
                    document.getElementById("onMove" + whoPlays[move]).style.background = "url(" + images + ")";
                counter++;
                if (counter == 20) {
                    clearInterval(cubeClick);
                }
            }, 100);            
        });
    }
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
    document.getElementById("newGame").addEventListener("click", function () {        
        if (gameStarted == false) {
            var newPlayer = {},
                newGame = confirm("Zelite novog igraca?");
            if (newGame == true) {
                newPlayer.name = chooseName();
                console.log(name);
                newPlayer.color = chooseColor();                
                newPlayer.positions = {
                    figure1: document.getElementById(newPlayer.color + 1),
                    figure2: document.getElementById(newPlayer.color + 2),
                    figure3: document.getElementById(newPlayer.color + 3),
                    figure4: document.getElementById(newPlayer.color + 4),
                };
                players[numPlayers] = newPlayer;
                console.log(name);
                document.getElementById(newPlayer.color + "Player").innerHTML = newPlayer.name;
                document.getElementById("newGame").innerHTML = "New Player";

            }
            console.log(players);
        }
        numPlayers++;
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
function setPlayer() {
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
    var currentPlayer = whoPlays[move];
    var moveCounter = document.getElementById("onMove" + currentPlayer).style.background;
    var stringMoveCounter = moveCounter.substr(12, 1);
    return stringMoveCounter;
}

// sa ovom f-jom "pomeramo" figuru tako sto farbamo odredjeni id sa odredjenom bojom
// potrebne popravke
function moveFigure() {
    var plays = onMove();
    players[move].positions.figure1.addEventListener("click", function () {
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

// Kretanje igre
function startGame() {
    document.getElementById("start").addEventListener("click", function () {
        console.log(players[move].positions);        
        gameStarted = true;
        if (firstTime != true) {
            move++;
            setPlayer();
            kocka();
            moveFigure();       
            clearPlayer();
        }
        else {
            document.getElementById("start").innerHTML = "Next Player";            
            setPlayer();
            kocka();
            console.log(cubeClicked);            
            moveFigure();
            clearPlayer();            
            firstTime = false;            
        }        
    });
}
// Inicijalizacija igre
function init() {
    addPlayers();
    startGame();
}

init();



