
import { CanvasView } from './view/CanvasView';
import { Pelota } from './sprites/Pelota';
import { Ladrillo } from './sprites/Ladrillo';
import { Paleta } from './sprites/Paleta';
import { Colision } from './Colision';
import './App.css'

// Imagenes - Images
import PALETA_IMAGEN from "./images/paddle.png";
import PELOTA_IMAGEN from "./images/ball.png";

// Nivel y Colores - Level and Colors
import { PALETA_VELOCIDAD, PALETA_ANCHO, PALETA_ALTURA, PALETA_INICIARX, PELOTA_VELOCIDAD, PELOTA_TAMANO, PELOTA_INICIARX, PELOTA_INICIARY } from "./setup";

// Ayudantes - Helpers
import { crearLadrillos } from './helpers';
import { useEffect, useRef } from "react";

function App() {
  let juegoTerminado = false;
  let puntaje = 0;

  function configurarJuegoTerminado(view: CanvasView) {
    view.dibujarInformacion("¡Juego Terminado!");
    juegoTerminado = false;
  };

  function configurarJuegoGanado(view: CanvasView) {
    view.dibujarInformacion("¡Juego Ganado!");
    juegoTerminado = false;
  };

  function bucleDeJuego(view: CanvasView, ladrillos: Ladrillo[], paleta: Paleta, pelota: Pelota, colision: Colision) {
    console.log("Dibujar!");
    view.limpiar();
    view.dibujarLadrillos(ladrillos);
    view.dibujarSprite(paleta);
    view.dibujarSprite(pelota);
    // Mover Pelota - Move Ball
    pelota.moverPelota();

    // Mueva la paleta y verifique que no salga del campo de juego - Move Paddle and Check So It Won't Exit The Playfield
    if ((paleta.moviendoIzquierda && paleta.pos.x > 0) || (paleta.moviendoDerecha && paleta.pos.x < view.canvas.width - paleta.ancho)) {
      paleta.moverPaleta();
    }

    colision.comprobarColisionPelota(pelota, paleta, view);
    const colisionandoLadrillo = colision.esLadrillosChocante(pelota, ladrillos);

    if (colisionandoLadrillo) {
      puntaje += 1;
      view.dibujarPuntaje(puntaje);
    }

    // El juego terminado cuando la pelota sale del campo de juego - Game Over When Ball Leaves Playfield
    if (pelota.pos.y > view.canvas.height) juegoTerminado = true;
    // Si se gana el juego, establecer el fin del juego y mostrar la victoria - If Game Won, Set gameOver and Display Win
    if (ladrillos.length === 0) return configurarJuegoGanado(view);
    // Regreso del juego terminado y no ejecutar la requestAnimationFrame - Return if gameOver and Don't run The requestAnimationFrame
    if (juegoTerminado) return configurarJuegoTerminado(view);

    requestAnimationFrame(() => bucleDeJuego(view, ladrillos, paleta, pelota, colision));
  };

  function iniciarJuego(view: CanvasView) {
    // Restablecer pantallas - Reset Displays
    puntaje = 0;
    view.dibujarInformacion("");
    view.dibujarPuntaje(0);
    // Crear Instancia de colision - Create a collision instance
    const colision = new Colision();
    // Crear todos los ladrillos - Create all Bricks
    const ladrillos = crearLadrillos();
    // Crear Pelota - Create a Ball
    const pelota = new Pelota(PELOTA_VELOCIDAD, PELOTA_TAMANO, { x: PELOTA_INICIARX, y: PELOTA_INICIARY }, PELOTA_IMAGEN);
    // Crear Paleta - Create a Paddle
    const paleta = new Paleta(PALETA_VELOCIDAD, PALETA_ANCHO, PALETA_ALTURA, { x: PALETA_INICIARX, y: view.canvas.height - PALETA_ALTURA - 5 }, PALETA_IMAGEN);

    bucleDeJuego(view, ladrillos, paleta, pelota, colision);
  };

  // Crear una Nueva Vista
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const vista = new CanvasView(canvasRef.current);
      vista.botonDeInicioInit(iniciarJuego);
    }
  }, []);

  return (
    <>
      <div className="principal" id="principal">
        <canvas id="campoDeJuego" width={1000} height={600} ref={canvasRef}></canvas>
        <div id="display">
          <div id="puntaje"></div>
          <button id="iniciar">Iniciar</button>
          <div id="informacion">¡Presiona Iniciar!</div>
        </div>
      </div>
    </>
  );
};

export default App;
