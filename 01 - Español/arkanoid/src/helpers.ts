
import { Ladrillo } from "./sprites/Ladrillo";
import { LADRILLO_ENERGIA, LADRILLO_ALTURA, LADRILLO_IMAGENES, LADRILLO_RELLENO, LADRILLO_ANCHO, ESCENARIO_COLUMNAS, ESCENARIO_RELLENO, NIVEL } from "./setup";

export function crearLadrillos(): Ladrillo[] {
    return NIVEL.reduce((ack, elemento, i) => {
        const fila = Math.floor((i + 1) / ESCENARIO_COLUMNAS);
        const columna = i % ESCENARIO_COLUMNAS;

        const x = ESCENARIO_RELLENO + columna * (LADRILLO_ANCHO + LADRILLO_RELLENO);
        const y = ESCENARIO_RELLENO + fila * (LADRILLO_ALTURA + LADRILLO_RELLENO);

        if (elemento === 0) return ack;

        return [ ...ack, new Ladrillo(LADRILLO_ANCHO, LADRILLO_ALTURA, { x, y }, LADRILLO_ENERGIA[elemento], LADRILLO_IMAGENES[elemento])];
    }, [] as Ladrillo[]);
};
