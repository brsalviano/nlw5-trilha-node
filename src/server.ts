import { http } from "./http"
import "./websocket/client"
import "./websocket/admin"

//Agora vamos ligar o servidor pela instância de http criada.
http.listen(3333, () => console.log("Server is running on port 3333"))