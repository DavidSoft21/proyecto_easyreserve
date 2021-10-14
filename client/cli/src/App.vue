<template>
  <div class="inicio">
    <Menu />

    <footer class="bg-secondary text-center text-white" id="footer">
      <!-- Grid container -->
      <div class="container p-4">

        <!-- Section: Social media -->
        <section class="mb-4">
      
        </section>
        <!-- Section: Social media -->

        <!-- Section: Form -->
        <section class="">
          <form action="">
            <!--Grid row-->
            <div class="row d-flex justify-content-center">
              <!--Grid column-->
              <p >
                  <strong>Subscribe para estar informado sobre nuestros servicios</strong>
                </p>
              <!--Grid column-->
                
              <!--Grid column-->
              <div class="col-md-5 col-12">
                <!-- Email input -->
                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    class="form-control"
                  />
                  <label class="form-label" for="form5Example21" bold
                    >Correo electronico</label
                  >
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-auto">
                <!-- Submit button -->
                <button type="submit" class="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->
          </form>
        </section>
        <!-- Section: Form -->

        <!-- Section: Text -->
        <section class="mb-4">
          <p>
            EasyReserve es una pagina web adaptable a cualquier establecimiento que brinde el servicio de alojamiento de habitaciones.
            las cuales dividimos en tres tipos de habitaciones, para que el cliente pueda escoger la que más se adapte a sus gustos y reservarla 
            para su uso Facil, Rapido y Sencillo.
          </p>
        </section>
        <!-- Section: Text -->

        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Github</h5>
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="https://github.com/DavidSoft21" class="text-white">E. David RM</a>
                </li>
                
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Linkedin</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Cristian Portilla</a>
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Interacpedia</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Edwin Yara</a>
                </li>
                
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Github</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Christian Torres</a>
                </li>
                
              </ul>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </section>
        <!-- Section: Links -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2021 Copyright:
        <a class="text-white" href="#"
          >Moto Moto</a
        >
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu
  }
};
</script>

<style>
  #footer{

    margin-top: 50px;

  }
</style>