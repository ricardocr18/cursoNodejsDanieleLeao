import { MeioDeTransporte } from "./meio-de-transporte";

export interface MeioDeTransporteComAbastecimento extends MeioDeTransporte {
    abastecimento(): void
}