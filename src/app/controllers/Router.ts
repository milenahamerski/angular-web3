import Database from "../db/Database";
import PrimaryScreen from "../view/primary-screen";
import AtividadeController from "../controllers/AtividadeController";
import RoteiroController from "../controllers/RoteiroController";
import UsuarioController from "../controllers/UsuarioController";

export default class Router {
    private db: Database = new Database();
    private ps: PrimaryScreen = new PrimaryScreen(this);

    public atividadeController: AtividadeController = new AtividadeController(this.db);
    public roteiroController: RoteiroController = new RoteiroController(this.db);
    public usuarioController: UsuarioController = new UsuarioController(this.db);

    constructor() {
        this.ps.getFirstScreen();
    }
}
