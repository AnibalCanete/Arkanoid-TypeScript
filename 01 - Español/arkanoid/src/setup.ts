
import LADRILLO_ROJO_IMAGEN from "./images/brick-red.png";
import LADRILLO_AZUL_IMAGEN from "./images/brick-blue.png";
import LADRILLO_VERDE_IMAGEN from "./images/brick-green.png";
import LADRILLO_AMARILLO_IMAGEM from "./images/brick-yellow.png";
import LADRILLO_PURPURA_IMAGEN from "./images/brick-purple.png";

// Obtenga el Elemento Canvas para calcular el ancho del ladrillo - Grab The Canvas Element for Calculating The Brick Width
// Dependiendo del ancho del lienzo - Depending on Canvas Width
const canvas: HTMLCanvasElement | null = document.querySelector("#campoDeJuego");

// Constantes - Constants
export const ESCENARIO_RELLENO = 10;
export const ESCENARIO_FILAS = 20;
export const ESCENARIO_COLUMNAS = 10;
export const LADRILLO_RELLENO = 5;
export const LADRILLO_ANCHO = canvas ? Math.floor((canvas.width - ESCENARIO_RELLENO * 2) / ESCENARIO_COLUMNAS) - LADRILLO_RELLENO : 100;
export const LADRILLO_ALTURA = canvas ? Math.floor((canvas.height - ESCENARIO_RELLENO * 2) / ESCENARIO_FILAS) - LADRILLO_RELLENO : 30;
export const PALETA_ANCHO = 150;
export const PALETA_ALTURA = 25;
export const PALETA_INICIARX = 450;
export const PALETA_VELOCIDAD = 10;
export const PELOTA_VELOCIDAD = 5;
export const PELOTA_TAMANO = 20;
export const PELOTA_INICIARX = 500;
export const PELOTA_INICIARY = 400;

export const LADRILLO_IMAGENES: { [key: number]: string } = {
    1: LADRILLO_ROJO_IMAGEN,
    2: LADRILLO_VERDE_IMAGEN,
    3: LADRILLO_AMARILLO_IMAGEM,
    4: LADRILLO_AZUL_IMAGEN,
    5: LADRILLO_PURPURA_IMAGEN,
};

export const LADRILLO_ENERGIA: { [key: number]: number } = {
    1: 1, // Ladrillo Rojo - Red Brick
    2: 1, // Ladrillo Verde - Green Brick
    3: 2, // Ladrillo Amarillo - Yellow Brick
    4: 2, // Ladrillo Azul - Blue Brick
    5: 3, // Ladrillo Purpura - Purple Brick
};

// Prettier/Ignorar - Prettier - Ignore
export const NIVEL = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
    0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
    0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
    0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 
    0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
];
