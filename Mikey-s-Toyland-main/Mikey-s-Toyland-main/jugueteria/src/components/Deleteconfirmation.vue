<template>
    <div>
      <p>¿Estás seguro de que deseas eliminar este producto?</p>
      <button @click="$emit('confirm')">Sí</button>
      <button @click="$emit('cancel')">No</button>
    </div>
  </template>

  <style scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    margin: 20px;
    color: white;
    height: 200px;
    width: 400px;
    background-color: #132d46;
    border-radius: 30px;
    left: 50px;
  }
  p {
    font-size: 18px;
    font-weight: bold;
  }
  button {
    padding: 10px 20px;
    background-color: #01c38d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
  }
</style>
  