//import Schema from mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//create schema
const roomsSchema = new Schema({

    name: { type: String, required: [true, 'Campo requerido'] },
    file: { type: File, required: [true, 'Campo requerido'] },
    value: { type: Number, required: [true, 'Campo requerido'] },
    name2: { type: String, required: [true, 'Campo requerido'] },
    checked: { type: Boolean, required: [true, 'Campo requerido'] },
    Tipos_Habitacion: { type: String, required: [true, 'Campo requerido'] },
    create_at: { type: Date, default: Date.now }

});

//convert to model
const roomsModel = mongoose.model('rooms', roomsSchema);

//export model
export default roomsModel;