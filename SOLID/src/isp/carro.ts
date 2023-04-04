import { MeioDeTransporte } from "./meio-de-transporte";
import { MeioDeTransporteComAbastecimento } from "./meio-de-transporte-com-abastecimento";

export class Carro implements MeioDeTransporteComAbastecimento{
    viagem(): void {
        console.log("Regra de negócio da Viagem");
    }
    manutencao(): void {
        console.log("Regra de negócio da manutenção do carro");
    }
    abastecimento(): void {
        console.log("Regra de negócio da abastecimento");
    }

}