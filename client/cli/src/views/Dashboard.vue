<template>
  <div class="dashboard">
    <h1>Bienvenido Master</h1>
    <router-link to="/crear_habitacion">
        <b-button>Crear habitación</b-button>
    </router-link>
    <!--TABLA-->
    <div class="container">
      
      <h1>listado de habitaciones</h1>

    <b-alert 
    :show="dismissCountDown" 
    dismissible :variant="mensaje.color" 
    @dismissed="dismissCountDown=0" 
    @dismiss-count-down="countDownChanged">
        {{mensaje.texto}}
    </b-alert>

    <form @submit.prevent="agregarHabitacion()">
        <h3>Agregar nueva habitacion</h3>
        <input type="text" class="form-control my-2" placeholder="Nombre habitacion" v-model="habitacion.nombre">
        <input type="text" class="form-control my-2" placeholder="Precio" v-model="habitacion.precio">
        <input type="text" class="form-control my-2" placeholder="Fecha" v-model="habitacion.fecha">
        <input type="text" class="form-control my-2" placeholder="Estado" v-model="habitacion.estado">
        <input type="text" class="form-control my-2" placeholder="tipo habitacion" v-model="habitacion.tipo_hab">
        <b-button class="btn-success my-2" type="submit">Crear</b-button>
    </form>
<!--AGREGAR HABITACION-->
      

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre habitacion</th>
            <th scope="col">Precio</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estado</th>
            <th scope="col">Tipo hab</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaHab" :key="index">
            <th scope="row">{{ item._id}}</th>
            <th scope="row">{{ item.nombre }}</th>
            <td>{{ item.precio }}</td>
            <td>{{ item.fecha }}</td>
            <td>{{ item.estado }}</td>
            <td>{{ item.tipo_hab }}</td>
           <!-- <td>{{ item.acciones }}</td>-->

<!--elemento 1 agregado -->
            <td>
              <b-button class="btn-danger mx-2" @click="eliminarHabitacion(item._id)" >Eliminar</b-button>
              <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)" >Editar</b-button>
            </td>
<!--//fin-->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listaHab: [], //array o arreglo
//elemento 2 agregado
      mensaje: {color: 'success',texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,

            habitacion: //objeto
            {
                nombre: "",
                precio: "",
                fecha: "",
                estado: "",
                tipo_hab: ""
            }
//fin del elemento 2
    };
  },

  created() {
    this.listarHabitaciones();
  },

  methods: {
    listarHabitaciones() {
      //metodo
      this.axios
        .get("/buscarTodo")
        .then((res) => {
          console.log(res.data);
          this.listaHab = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },


//elemento 3 agregado
    eliminarhabitacion(nombre){//pertenece a methods
            this.axios.delete(`/eliminarParametro/, ${_id}`)//eliminarParametro es el path que esta en routes roomsBd eliminar
            .then(res=>{
              const index = this.listaHab.findIndex(item._id===res.data._id);
              this.listaHab.splice(index, 1);
              this.mensaje.color="succes";
                this.mensaje.texto="Habitacion eliminada con exito";
                this.showAlert();
            })
            .catch(e=>{
               console.log(e.response);
            })
        },
//fin del elemento 3

//elemento 4 agregado
        agregarHabitacion() {
            this.axios.post('/nuevo-registro',this.habitacion)
            .then(res =>{
                this.listaHab.push(res.data)
                this.habitacion.nombre="";
                this.habitacion.precio="";
                this.habitacion.fecha="";
                this.habitacion.estado="";
                this.habitacion.tipo_hab="";
                this.mensaje.color="succes";
                this.mensaje.texto="Habitacion agregada con exito";
                this.showAlert();
            })
            .catch(e=>{
                console.log(e.response);
            })
        },
//fin del elemento 4

//elemento 5 agregado
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
        this.dismissCountDown = this.dismissSecs
        },
//fin del elemnto
  },

  components: {

  },

  name: "Dashboard",
  beforeCreate() {
    console.log("metodo beforeCreate");
    var auth = window.localStorage.getItem("auth");
    console.log("su autentificacion esta :" + auth);

    if (auth !== "ok") {
      console.log("no logged");
      this.$router.push({
        path: "/login",
      });
    }
  },
};
</script>
