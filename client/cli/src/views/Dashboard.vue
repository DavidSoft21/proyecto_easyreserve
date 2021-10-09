<template>
  <div class="dashboard">
    <h1>Bienvenido Master</h1>
    <b-button type="submit" variant="danger" @click="removerItem"
      >cerrar sesion</b-button
    >
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
