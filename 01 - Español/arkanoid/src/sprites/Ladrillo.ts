
import type { Vector } from "../types";

export class Ladrillo {
    private ladrilloImagen: HTMLImageElement = new Image();

    public ladrilloAncho: number;
    public ladrilloAltura: number;
    public posicion: Vector;
    public ladrilloEnergia: number;

    constructor(ladrilloAncho: number, ladrilloAltura: number, posicion: Vector, ladrilloEnergia: number, imagen: string) {
        this.ladrilloAncho = ladrilloAncho;
        this.ladrilloAltura = ladrilloAltura;
        this.posicion = posicion;
        this.ladrilloEnergia = ladrilloEnergia;
        this.ladrilloImagen.src = imagen;
    };

    // Captadores - Getters
    get ancho(): number {
        return this.ladrilloAncho;
    };

    get altura(): number {
        return this.ladrilloAltura;
    };

    get pos(): Vector {
        return this.posicion;
    };

    get imagen(): HTMLImageElement {
        return this.ladrilloImagen;
    };

    get energia(): number {
        return this.ladrilloEnergia;
    };

    // Conjunto - Setter
    set energia(energia: number) {
        this.ladrilloEnergia = energia;
    };
};
