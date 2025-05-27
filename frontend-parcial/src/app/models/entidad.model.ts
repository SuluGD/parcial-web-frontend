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
    nombre_contratante: string;
    documento_contratante: string;
    nombre_contratista: string;
    documento_contratista: string;
    fecha_inicial: Date;
    fecha_final: Date;
    entidad?: Entidad;
} 