import { MeioDeTransporte } from "./meio-de-transporte";

export class Metro implements MeioDeTransporte{
    viagem(): void {
        console.log("Regra de negócio da Viagem");
    }
    manutencao(): void {
        console.log("Regra de negócio da manutenção do metro");
    }   
}