<template>
    <form  @submit.prevent="submitForm">
      <div>
        <label>Nombre:</label>
        <input v-model="name" required />
      </div>
      <div>
        <label>Precio:</label>
        <input type="number" v-model="price" required />
      </div>
      <div>
        <label>Imagen:</label>
        <input type="file" @change="onFileChange" accept="image/*" required />
      </div>
        <div>
          <label>Descripción:</label>
          <input type="text" v-model="description" required />
        </div>
        <div>
        <label>Empresa:</label>
          <input type="text" v-model="company" required />
        </div>
        <div>
        <label>Tamaño:</label>
          <input type="text" v-model="size" required />
        </div>
      <button type="submit">Guardar</button>
    </form>
  </template>
  
  <script>
import axios from 'axios';
  export default {
    props: ['initialProduct'],
    data() {
      return {
        name :'',
        price: '',
        image: '',
        description: '',
        company: '',
        size: '',
      };
    },
    methods: {
      onFileChange(event) {
        const file = event.target.files[0];
        this.image = file;
      },

      async submitForm () {
        const formdata = new FormData();
        formdata.append('name', this.name);
        formdata.append('price', this.price);
        formdata.append('image', this.image);
        formdata.append('description', this.description);
        formdata.append('company', this.company);
        formdata.append('size', this.size);
        const respuesta = await axios.post('http://127.0.0.1:3000/toys', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(respuesta.data);
      },
    },
  };
  </script>

  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    margin: 20px;
    color: white;
    height: 500px;
    width: 400px;
    background-color: #132d46;
    border-radius: 30px;
    left: 50px;
  }
  label {
    font-size: 18px;
    font-weight: bold;
  }
  input {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: none;
  }
  button {
    padding: 10px 20px;
    background-color: #01c38d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #01a275;
  }
  button:active {
    background-color: #00875a;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  button:disabled:hover {
    background-color: #ccc;
  }
  button:disabled:active {
    background-color: #ccc;
  }
  
</style>
  