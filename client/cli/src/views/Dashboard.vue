<template>
  <div class="dashboard">
    <h1>Bienvenido Master</h1>
    <router-link to="/crear_habitacion">
        <b-button>Crear habitación</b-button>
    </router-link>
    <!--TABLA-->
    <div class="container">
      <br />
      <br />
      <h4>Listado de habitaciones</h4>
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre habitacion</th>
            <th scope="col">Precio</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estado</th>
            <th scope="col">Tipo hab</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaHab" :key="index">
            <th scope="row">{{ item.nombre }}</th>
            <td>{{ item.precio }}</td>
            <td>{{ item.fecha }}</td>
            <td>{{ item.estado }}</td>
            <td>{{ item.tipo_hab }}</td>

            <td></td>
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
  },

  components: {},

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
