import React from 'react';
import "./color.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter}from 'reactstrap'



const data =[
  { Nivel: 1, periodo: "Agos-Dic 2022", horas: "42", calificacion: "69%",estatus: "NA", docente: "lorena"},
  { Nivel: 2, periodo: "Agos-Dic 2022", horas: "42", calificacion: "74%",estatus: "aprobado", docente: "lorena"},
  { Nivel: 3, periodo: "Fed-Jun 2022", horas: "42", calificacion: "60%",estatus: "NA", docente: "lorena"},
  { Nivel: 4, periodo: "Fed-Jun 2022", horas: "42", calificacion: "80%",estatus: "aprobado", docente: "lorena"},
  { Nivel: 5, periodo: "Agos-Dic 2023", horas: "42", calificacion: "95%",estatus: "aprobado", docente: "lorena"},
  { Nivel: 6, periodo: "Agos-Dic 2023", horas: "42", calificacion: "100%",estatus: "aprobado", docente: "lorena"},
]




//////////////////// CLASE DE LOS COMPONENTES DE CADA UNO DE LOS REGISTROS////////////////////////////////////

class app extends React.Component{
    state={
      data: data,
      form:{
        Nivel:'',
        periodo:'',
        horas:'',
        calificacion:'',
        estatus:'',
        docente:'',
      },
      modalInsertar: false,
      modalEditar: false,
    }
    /////////////SELECCION DE LOS DATOS A EVALUAR//////////////////////  

    handleChannge=e=>
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      
}
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////  FUNCIONES DE LOS MODALS DE AGREGAR Y EDITAR /////////////////////////////////////


mostrarModalInsertar=()=>{
  this.setState({modalInsertar: true});
}

ocultarModalInsertar=()=>{
  this.setState({modalInsertar: false});
}

mostrarModalEditar=(Registro)=>{
  this.setState({modalEditar: true, form: Registro});
}

ocultarModalEditar=()=>{
  this.setState({modalEditar: false});
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////  FUNCIONES LOS BOTONES/////////////////////


//para guardar el nuevo valor que se agregara y actualizar lista
insertar=()=>{
  var valorNuevo={...this.state.form};
  valorNuevo.Nivel=this.state.data.length+1;
  var lista=this.state.data;
  lista.push(valorNuevo);
  this.setState({data: lista, modalInsertar: false});

}

//para editar el nuevo valor

editar=(dato)=>{
    var contador=0;
    var lista=this.state.data;
    lista.map((registro)=>{
      if(dato.Nivel==registro.Nivel){
        lista[contador].periodo=dato.periodo;
        lista[contador].horas=dato.horas;
        lista[contador].calificacion=dato.calificacion;
        lista[contador].estatus=dato.estatus;
        lista[contador].docente=dato.docente;
      }
      contador++;
    });
    this.setState({data: lista, modalEditar: false});

}
//en esta funcion se podra eliminar los datos ingresado
eliminar=(dato)=>{
  var opcion=window.confirm("Desea Eliminar estos datos"+dato.Nivel);
  if (opcion){
    var contador=0;
    var lista = this.state.data;
    lista.map((Registro)=>{
      if(Registro.Nivel==dato.Nivel){
        lista.splice(contador, 1);
      }
        contador++;
    });
    this.setState({data:lista});
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////RENDERISAR NUESTRA OPCION DE INSERTAR Y DE NUESTRA TABLA GENERAL. ////////////////////////////////////////////

    render(){
  return (
  <>
      <Container>
      <br/>
      <Button color='success' onClick={()=>this.mostrarModalInsertar()}>actualizar calificacion</Button>
    <br/><br/>

calificaciones del alumno: Josue David Hernandez Hernandez.
      <Table className='table-bordered border-danger'>

        <thead><tr className='table-primary '><th>Nivel</th>
        <th>periodo</th>
        <th>horas</th>
        <th>calificacion</th>
        <th>estatus</th>
        <th>docente</th>
        <th>Acciones</th></tr></thead>
        <tbody>
          {this.state.data.map((elemento)=>(
            <tr className='table-danger'>
                <td>{elemento.Nivel}</td>
                <td>{elemento.periodo}</td>
                <td>{elemento.horas}</td>
                <td>{elemento.calificacion}</td>
                <td>{elemento.estatus}</td>
                <td>{elemento.docente}</td>
                    
                <td><Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}>Modificar</Button>{" "}
                <Button color="danger"onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>
                </tr>
                
          ))}
        
        </tbody>


      </Table>
    


----------------------------------------"VERIFIQUE LOS DATOS ANTES DE AGREGARLOS."---------------------------------


      </Container>

      <Modal isOpen={this.state.modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Ingresar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Nivel</label>
            <input class="form-cclassontrol" readOnly type='text' value={this.state.data.length+1}/> 
          </FormGroup>
        </ModalBody>

        <ModalBody>
          <FormGroup>
            <label>periodo</label>
            <input class="form-control" name="periodo" type='text' onChange={this.handleChannge}/> 
          </FormGroup>
        </ModalBody>

        <ModalBody>
          <FormGroup>
            <label>horas</label>
            <input class="form-control" name='horas' type='text'onChange={this.handleChannge}/> 
          </FormGroup>
        </ModalBody>

        <ModalBody>
          <FormGroup>
            <label>calificacion</label>
            <input class="form-control" name='calificacion' type='text'onChange={this.handleChannge}/> 
          </FormGroup>
        </ModalBody>

        <ModalBody>
          <FormGroup>
            <label>estatus</label>
            <input class="form-control" name='estatus' type='text'onChange={this.handleChannge}/> 
          </FormGroup>
        </ModalBody>

        <ModalBody>
          <FormGroup>
            <label>docente</label>
            <input class="form-control" name='docente' type='text'onChange={this.handleChannge}/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color= 'primary' onClick={()=>this.insertar()}>Insertar</Button>
          <Button color= 'danger'onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
        </ModalFooter>

      </Modal>

      <Modal isOpen={this.state.modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Nivel</label>
            <input class="form-control" readOnly type='text' value={this.state.form.Nivel}/> 
          </FormGroup>
        </ModalBody>

        <ModalBody>
          <FormGroup>
            <label>periodo</label>
            <input class="form-control" name="periodo" type='text' onChange={this.handleChannge} value={this.state.form.Nombre}/> 
          </FormGroup>
        </ModalBody>

        <ModalBody>
          <FormGroup>
            <label>horas</label>
            <input class="form-control" name='horas' type='text'onChange={this.handleChannge} value={this.state.form.horas}/> 
          </FormGroup>
        </ModalBody>

        <ModalBody>
          <FormGroup>
            <label>calificacion</label>
            <input class="form-control" name='calificacion' type='text'onChange={this.handleChannge} value={this.state.form.calificacion}/> 
          </FormGroup>
        </ModalBody>

        <ModalBody>
          <FormGroup>
            <label>estatus</label>
            <input class="form-control" name='estatus' type='text'onChange={this.handleChannge} value={this.state.form.status}/> 
          </FormGroup>
        </ModalBody>
        
        <ModalBody>
          <FormGroup>
            <label>docente</label>
            <input class="form-control" name='docente' type='text'onChange={this.handleChannge} value={this.state.form.docente}/> 
          </FormGroup>
        </ModalBody>


        <ModalFooter>
          <Button color= 'primary'onClick={()=>this.editar(this.state.form)}>Editar</Button>
          <Button color= 'danger' onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
        </ModalFooter>

      </Modal>
    </>
   
  );
}
}

  export default app;