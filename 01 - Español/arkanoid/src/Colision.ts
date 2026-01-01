
// Tipos - Types
import { Ladrillo } from "./sprites/Ladrillo";
import { Paleta } from "./sprites/Paleta";
import { Pelota } from "./sprites/Pelota";
import { CanvasView } from "./view/CanvasView";

export class Colision {
    esLadrilloChocante(pelota: Pelota, ladrillo: Ladrillo): boolean {
        if (
            pelota.pos.x < ladrillo.pos.x + ladrillo.ancho &&
            pelota.pos.x + pelota.ancho > ladrillo.pos.x &&
            pelota.pos.y < ladrillo.pos.y + ladrillo.altura &&
            pelota.pos.y + pelota.altura > ladrillo.pos.y
        ) { return true ;}
        return false;
    };

    // Comprueba la Colisión de la Bola con los ladrillos - Check Ball Collision With Bricks
    esLadrillosChocante(pelota: Pelota, ladrillos: Ladrillo[]): boolean {
        let colisionando = false;
        ladrillos.forEach((ladrillo, i) => {
            if (this.esLadrilloChocante(pelota, ladrillo)) {
                pelota.cambiarYDireccion();

                if (ladrillo.energia === 1) {
                    ladrillos.splice(i, 1);
                } else {
                    ladrillo.energia -= 1;
                }
                colisionando = true;
            }
        });
        return colisionando;
    };

    comprobarColisionPelota(pelota: Pelota, paleta: Paleta, view: CanvasView): void {
        // 1. Comprobar la colisión de la pelota con la paleta - 1. Check Ball Collision With Paddle
        if (
            pelota.pos.x + pelota.ancho > paleta.pos.x &&
            pelota.pos.x < paleta.pos.x + paleta.ancho &&
            pelota.pos.y + pelota.altura === paleta.pos.y
        ) { pelota.cambiarYDireccion(); }
        // 2. Comprobacion de la colisión de la pelota con las paredes - 2. Check Ball Collision With Walls
        // Restricciones del movimiento de la pelota X - Ball Movement X Constraints
        if (pelota.pos.x > view.canvas.width - pelota.ancho || pelota.pos.x < 0) {
            pelota.cambiarXDireccion();
        }
        // Restricciones Y del movimiento de la pelota - Ball Movement Y Constraints
        if (pelota.pos.y < 0) {
            pelota.cambiarYDireccion();
        }
    };
};
