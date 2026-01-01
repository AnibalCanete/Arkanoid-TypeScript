
// Tipos - Types
import { Ladrillo } from "../sprites/Ladrillo";
import { Paleta } from "../sprites/Paleta";
import { Pelota } from "../sprites/Pelota";

export class CanvasView {
    canvas: HTMLCanvasElement;
    private contexto: CanvasRenderingContext2D | null;
    private puntajeDisplay: HTMLObjectElement | null;
    private iniciar: HTMLButtonElement | null;
    private informacion: HTMLObjectElement | null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const ctx = canvas.getContext("2d");
        this.contexto = ctx;
        this.puntajeDisplay = document.querySelector("#puntaje");
        this.iniciar = document.querySelector("#iniciar") as HTMLButtonElement;
        this.informacion = document.querySelector("#informacion");
    };

    // Métodos - Methods
    limpiar(): void {
        this.contexto?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    botonDeInicioInit(iniciarFuncion: (view: CanvasView) => void): void {
        this.iniciar?.addEventListener("click", () => iniciarFuncion(this));
    };

    dibujarPuntaje(puntaje: number): void {
        if (this.puntajeDisplay) this.puntajeDisplay.innerHTML = puntaje.toString();
    };

    dibujarInformacion(texto: string): void {
        if (this.informacion) this.informacion.innerHTML = texto;
    };

    dibujarSprite(ladrillo: Ladrillo | Paleta | Pelota): void {
        if (!ladrillo) return;
        this.contexto?.drawImage(ladrillo.imagen, ladrillo.pos.x, ladrillo.pos.y, ladrillo.ancho, ladrillo.altura);
    };

    dibujarLadrillos(ladrillos: Ladrillo[]): void {
        ladrillos.forEach(ladrillo => this.dibujarSprite(ladrillo));
    };
};
