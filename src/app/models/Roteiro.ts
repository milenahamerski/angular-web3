import { IAtividade } from "./IAtividade";

export default class Roteiro {
  private id: number;
  private destino: string;
  private atividades: IAtividade[] | undefined;
  private dataInicio: Date;
  private dataFim: Date;

  constructor(
    id?: number,
    destino?: string,
    dataInicio?: Date,
    dataFim?: Date,
    atividades?: IAtividade[]
  ) {
    this.id = id ?? 0;
    this.destino = destino ?? "";
    this.dataInicio = dataInicio ?? new Date();
    this.dataFim = dataFim ?? new Date();
    this.atividades = atividades;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getDestino(): string {
    return this.destino;
  }

  public setDestino(destino: string): void {
    this.destino = destino;
  }

  public getDataInicio(): Date {
    return this.dataInicio;
  }

  public setDataInicio(dataInicio: Date): void {
    this.dataInicio = dataInicio;
  }

  public getDataFim(): Date {
    return this.dataFim;
  }

  public setDataFim(dataFim: Date): void {
    this.dataFim = dataFim;
  }

  public getAtividades(): IAtividade[] | undefined {
    return this.atividades;
  }

  public setAtividades(atividades: IAtividade[] | undefined): void {
    this.atividades = atividades;
  }

  public gerarRoteiroString(): string {
    const atividadesString = this.atividades?.map(atividade => 
      `Atividade: ${atividade.getNome()}, Local: ${atividade.getLocal()}, Duração: ${atividade.getDuracao()} horas`
    ).join('\n') ?? "Nenhuma atividade definida.";

    return `
      Roteiro para o Destino: ${this.destino}
      ID: ${this.id}
      Data de Início: ${this.dataInicio.toISOString().split('T')[0]}
      Data de Fim: ${this.dataFim.toISOString().split('T')[0]}
      Atividades:
      ${atividadesString}
    `;
  }
}
