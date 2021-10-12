<template>
  <div class="dashboard">
    <h1>Bienvenido Master</h1>
    <b-button type="submit" variant="danger" @click="removerItem"
      >cerrar sesion</b-button
    >

      <table class="table">
        <thead>
            <tr>
                <!--<th scope="col">ID</th>
                <th scope="col">TIPO HABITACION</th>
                <th scope="col">DESCRIPCION</th>
                <th scope="col">ACCION</th>-->

                <th scope="col">ID</th>
                <th scope="col">NOTAS</th>
                <th scope="col">DESCRIPCION</th>
                <th scope="col">ACCION</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in notas" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.tipo_habitacion}}</td>
                <td>item.descripcion</td>

                <td>

                </td>
            </tr>
        </tbody>
    </table>


  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "Dashboard",
  beforeCreate() {
    console.log("metodo beforeCreate");
    var auth = window.localStorage.getItem("auth");
    console.log("su autentificacion esta :" + auth);

    if (auth !== "ok") {
      console.log("no logged");
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    removerItem() {
      window.localStorage.removeItem("auth");
      this.$router.push({ path: "/" });
    },
  },
  components: {
    
  }
};
</script>
