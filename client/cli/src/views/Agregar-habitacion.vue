<template>
<div class="container">
    <h1>listado de habitaciones</h1>

    <b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
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
</div>
</template>

<script>
export default {

    data() {
        return {
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
        }
    },

    created() {
        this.listarHabitaciones();
    },

    methods: {
        agregarHabitacion() {

        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
        this.dismissCountDown = this.dismissSecs
        },
    },
    components: {

    },

};
</script>
