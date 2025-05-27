export interface Entidad {
    id?: number;
    nit: string;
    nombre: string;
    contratos?: Contrato[];
}

export interface Contrato {
    id?: number;
    identificador: string;
    valor: number;
    nombreContratante: string;
    documentoContratante: string;
    nombreContratista: string;
    documentoContratista: string;
    fechaInicial: Date;
    fechaFinal: Date;
    entidad?: Entidad;
} 