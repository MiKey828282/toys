<template>
    <div>
      <h1>Lista de Productos</h1>
      <table>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>
              <router-link :to="'/product/' + product.id">
              <img :src="'http://127.0.0.1:3000/images/'+ product.image " alt="">
            </router-link>
            </td>
           
            <h2>
              <td>
                <router-link :to="'/product/' + product.id"> {{ product.name }}</router-link>
              </td>
            </h2>
            <td>{{ product.price }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.company }}</td>
            <td>{{ product.size }}</td>
            <td>
              <button @click="$emit('edit', product)">Editar</button>
              <button @click="$emit('delete', product)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
      <button @click="nextPage" :disabled="!hasMore">Siguiente</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    //props: ['products', 'currentPage', 'hasMore'],
    computed: {
      paginatedProducts() {
        // Calcular productos de la página actual (ejemplo)
        //return this.products.slice((this.currentPage - 1) * 10, this.currentPage * 10);
      },
    },

    data() {
      return {
        products: [],
        currentPage: 1,
        hasMore: true,
      };
    },
    mounted() {
      axios.get('http://127.0.0.1:3000/toys')
        .then(response => {
          this.products = response.data.data;
          console.log(response.data.data);
        })
        .catch(error => {
          console.error(error);
        })
      },
    
    methods: {
      prevPage() {
        this.$emit('changePage', this.currentPage - 1);
      },
      nextPage() {
        this.$emit('changePage', this.currentPage + 1);
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #132d46;
  
  }
  
   td {
    padding: px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  
  button {
    padding: 5px 10px;
    margin: 5px;
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  button:hover:not(:disabled) {
    background-color: #132d46;
    color: #fff;
  }
  img {
    width: 200px;
    height: 200px;
  }
  </style>
  