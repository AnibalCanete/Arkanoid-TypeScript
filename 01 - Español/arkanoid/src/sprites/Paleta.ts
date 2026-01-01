
import type { Vector } from "../types";

export class Paleta {
    private paletaImagen: HTMLImageElement = new Image();
    private moverIzquierda: boolean;
    private moverDerecha: boolean;

    public velocidad: number;
    public paletaAncho: number;
    public paletaAltura: number;
    public posicion: Vector;

    constructor(velocidad: number, paletaAncho: number, paletaAltura: number, posicion: Vector, imagen: string) {
        this.velocidad = velocidad;
        this.paletaAncho = paletaAncho;
        this.paletaAltura = paletaAltura;
        this.posicion = posicion;
        this.moverIzquierda = false;
        this.moverDerecha = false;
        this.paletaImagen.src = imagen;

        // Oir Eventos - Event Listeners
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
    };

    // Captadores - Getters
    get ancho(): number {
        return this.paletaAncho;
    };

    get altura(): number {
        return this.paletaAltura;
    };

    get pos(): Vector { 
        return this.posicion;
    };

    get imagen(): HTMLImageElement {
        return this.paletaImagen;
    };

    get moviendoIzquierda(): boolean {
        return this.moverIzquierda;
    };

    get moviendoDerecha(): boolean {
        return this.moverDerecha;
    };

    // Métodos - Methods
    moverPaleta(): void {
        if (this.moverIzquierda) this.pos.x -= this.velocidad;
        if (this.moverDerecha) this.pos.x += this.velocidad;
    };

    handleKeyUp = (e: KeyboardEvent): void => {
        if (e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moverIzquierda = false;
        if (e.code === "ArrowRight" || e.key === "ArrowRight") this.moverDerecha = false;
    };

    handleKeyDown = (e: KeyboardEvent): void => {
        if (e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moverIzquierda = true;
        if (e.code === "ArrowRight" || e.key === "ArrowRight") this.moverDerecha = true;
    };
};
