import Database from "../db/Database";
import Atividade from "../models/Atividade";

export default class AtividadeController {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    public getNewActivity(): Atividade {
        return new Atividade();
    }

    public registerNewActivity(atividade: Atividade): void {
        this.db.addNewActivity(atividade);
    }
}
