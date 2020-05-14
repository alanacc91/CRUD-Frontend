import { Cliente } from './cliente';

export class Cartao {
    id: number;
    numero: string;
    dataDeVencimento: Date;
    cliente: Cliente;
}