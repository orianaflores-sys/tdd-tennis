import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
    //Inicio del juego  =>   "Love - Love"
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love");
  });

  //Jugador 1 anota 1 vez jugador 2 en 0=> "15 - Love"
  it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("15 - Love"); //Vericar    ->ASSERT
  });
  it("jugador 1 anota 2 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("30 - Love");
  });
  it("jugador 1 anota 3 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("40 - Love");
  });

  it("jugador 1 anota 4 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Game for player 1");
  });

  it("jugador 2 anota 1 vez jugador 1 en cero", () => {
  let tennis = new Tennis();
  tennis.player2Scores();
  expect(tennis.score()).toEqual("Love - 15");
  });

  it("jugador 2 anota 2 veces jugador 1 en cero", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 30");
  });

  it("jugador 2 anota 3 veces jugador 1 en cero", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 40");
  });

  it("jugador 2 anota 4 veces jugador 1 en cero", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Game for player 2");  
  });

  it("ambos jugadores anotan una vez", () => {
  let tennis = new Tennis();
  tennis.player1Scores();
  tennis.player2Scores();
  expect(tennis.score()).toEqual("15 - 15");
  });

  it ("ambos jugadores anotan dos veces", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("30 - 30");
  });

  it("ambos jugadores anotan tres veces es Deuce", () => {
  let tennis = new Tennis();
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  expect(tennis.score()).toEqual("Deuce");
  });

  it("desde Deuce, jugador 1 anota y queda Advantage for Player 1", () => {
  let tennis = new Tennis();

  // Llegar a Deuce (3-3)
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // Punto extra de Player 1 (4-3)
  tennis.player1Scores();

  expect(tennis.score()).toEqual("Advantage for player 1");
});

it("desde Advantage player 1, jugador 1 anota y gana el game", () => {
  let tennis = new Tennis();

  // Deuce (3-3)
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // Advantage P1 (4-3)
  tennis.player1Scores();

  // Gana (5-3)
  tennis.player1Scores();

  expect(tennis.score()).toEqual("Game for player 1");
});

it("desde Deuce, jugador 2 anota y queda Advantage for player 2", () => {
  let tennis = new Tennis();

  // Deuce (3-3)
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // Punto extra de Player 2 (3-4)
  tennis.player2Scores();

  expect(tennis.score()).toEqual("Advantage for player 2");
});


it("desde Advantage player 2, jugador 2 anota y gana el game", () => {
  let tennis = new Tennis();

  // Deuce (3-3)
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // Advantage P2 (3-4)
  tennis.player2Scores();

  // Gana (3-5)
  tennis.player2Scores();

  expect(tennis.score()).toEqual("Game for player 2");
});

});



