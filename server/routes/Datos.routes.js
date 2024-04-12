import routerx from "express-promise-router";
import Datosctr from "../controllers/Datos.controller";

const router = routerx();

router.post("/saveData", Datosctr.postDatos);
router.get("/buscar", Datosctr.getDatos);
router.get("/buscar/:id", Datosctr.getDato);
router.patch("/actualizar/:id", Datosctr.putDatos);
router.delete("/delete/:id",Datosctr.delDatos);


export default router;
