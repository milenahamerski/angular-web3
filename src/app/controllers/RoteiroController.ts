import Database from "../db/Database";
import Roteiro from "../models/Roteiro";

export default class RoteiroController {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    public getNewRoteiro(): Roteiro {
        return new Roteiro();
    }

    public registerNewRoteiro(roteiro: Roteiro): void {
        this.db.addNewRoteiro(roteiro);
    }
}
