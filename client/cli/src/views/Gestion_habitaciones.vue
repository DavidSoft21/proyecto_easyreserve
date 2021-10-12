<template>
    <div>
        <h1>Listado habitaciones</h1>

        <br>
    <h4>gestion habitaciones</h4>
    <br>
    <table class="table">
        <thead>
            <tr>

                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Fecha</th>
                <th scope="col">Estado</th>
                <th scope="col">Tipo hab</th>
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
export default {
    
}
</script>