<template>
  <nav>
    
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Manrope:wght@700&family=Poppins:wght@300;400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: 0;
  background: transparent;
}

body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  background: #f4f4f4;
  font: 14px 'Manrope', sans-serif;
  font-weight: 400;
  line-height: normal;
  overflow-x: hidden;
  letter-spacing: 0.02em;
}

#app {
  width: 95%;
  min-width: 320px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a, .btn {
  color: inherit;
  text-decoration: none;
  transition: all .3s;
}

input[type="text"], input[type="password"], select, textarea {
  width: 100%;
  background-color: #fff;
  color: #000;
  box-shadow: inset 0 0 0 1px #e3e3e3, inset 1px 2px 5px rgb(0 0 0 / 10%);
}

input[type="text"], input[type="password"] {
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  padding: 0 15px;
}

ul {
  list-style: none;
}
</style>
