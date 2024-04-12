
import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";



const app = express();

//conexion a base de datos
mongoose.Promise=global.Promise;
const dbUrl='mongodb+srv://josue:eY4$n-L-gYc48gf@cluster0.kskhy9t.mongodb.net/informacion';
mongoose.connect(dbUrl)
.then(mongoose=>console.log('Conectado a la bd en el puerto 27017'));
//Listening de puertos
app.set('port', process.env.PORT || 4000);

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",routes);

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port:` + app.get('port'));
})

