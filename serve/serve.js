require('./config/config')

const express = require('express')
const app = express();

//Para parciar el cuerpo de la peticion se usa este paquete 
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//Fin de el cuerpo de la peticion
app.get('/usuario', (req, res) =>{
  res.json('get Usuario')
})
app.post('/usuario', (req, res) =>{

let body =req.body;
    //Validacion con los errores de Status
    if(body.nombre === undefined || body.edad === undefined)
    {
     let requerimientos ="";
     
    if(body.nombre === undefined){
    requerimientos='nombre'
    }

if(body.edad === undefined){

    requerimientos=`${requerimientos} edad` 
   }
 res.status(400).json({
        ok:false,
        mensaje: `Son obligatorio : ${requerimientos} `})
    }
    else{
     let body = req.body;
     res.json({
          persona:body })
    }
 
})
app.put('/usuario/:id', (req, res) =>{
    let id = req.params.id
    return res.json({
      id
  })
})
app.delete('/usuario', (req, res) =>{
  res.json('Delete Usuario')
})

app.listen(process.env.PORT , ()=>{
    console.log('Escuchando el puerto',process.env.PORT );
})