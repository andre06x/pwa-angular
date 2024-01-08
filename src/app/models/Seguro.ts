import { MarcaCarro } from './MarcaCarro';

export class Seguro {
  marcaCarro: MarcaCarro | undefined;
  modeloCarro: string | undefined;
  placaCarro: string | undefined;
  nomeProprietario: string | undefined;
  sobrenomeProprietario: string | undefined;
  dataNascimentoProprietario: string | undefined;
}

export interface interfaceSeguro {
  marcaCarro: MarcaCarro | null;
  modeloCarro: string | null;
  placaCarro: string | null;
  nomeProprietario: string | null;
  sobrenomeProprietario: string | null;
  dataNascimentoProprietario: string | null;
}
