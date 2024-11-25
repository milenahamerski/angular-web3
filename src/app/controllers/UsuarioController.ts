import Database from "../db/Database";
import Usuario from "../models/Usuario";

export default class UsuarioController {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    public getNewUser(): Usuario {
        return new Usuario(0, "", "", "");
    }
    

    public registerNewUser(usuario: Usuario): void {
        this.db.addNewUser(usuario);
    }
}
