
import type { Vector } from "../types";

export class Pelota {
    private velocidad: Vector;
    private pelotaImagen: HTMLImageElement = new Image();

    public pelotaTamano: number;
    public posicion: Vector;

    constructor(velocidad: number, pelotaTamano: number, posicion: Vector, imagen: string) {
        this.pelotaTamano = pelotaTamano;
        this.posicion = posicion;
        this.velocidad = { x: velocidad, y: -velocidad };
        this.pelotaImagen.src = imagen;
    }

    // Captadores - Getters
    get ancho(): number {
        return this.pelotaTamano;
    };

    get altura(): number {
        return this.pelotaTamano;
    };

    get pos(): Vector {
        return this.posicion;
    };

    get imagen(): HTMLImageElement {
        return this.pelotaImagen;
    };

    // Métodos - Methods
    cambiarYDireccion(): void {
        this.velocidad.y = -this.velocidad.y;
    };

    cambiarXDireccion(): void {
        this.velocidad.x = -this.velocidad.x;
    };

    moverPelota(): void {
        this.pos.x += this.velocidad.x;
        this.pos.y += this.velocidad.y;
    };
};
