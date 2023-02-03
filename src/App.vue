<template>
  <NavBar/>
  <router-view/>
  <FooterBar/>
</template>
<script>
import FooterBar from './components/FooterBar.vue';
import NavBar from './components/NavBar.vue';

export default {
    components: { NavBar, FooterBar }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700&display=swap');

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
  font-weight: 300;
  font-family: Titillium Web,sans-serif;
  line-height: 1.5;
  overflow-x: hidden;
  letter-spacing: 0.02em;
}

#app {
  min-width: 320px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.btn {
  color: inherit;
  text-decoration: none;
  transition: all .3s;
}

a {
  transition: all .3s;
  text-decoration: none;
  color: #106bc5;
}

.navbar a:hover, .btn:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.footer a:hover, .btn:hover {
  color: rgba(255, 255, 255, 0.7);
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

.h2, h2 {
  font-size: 1.4375rem;
}

.h2, h1, .h1, h2 {
  font-weight: 400;
  line-height: 1.25;
  text-transform: none;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1280px;
  min-width: 360px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.content-section {
  display: block;
  margin: 0;
  max-width: 720px;
}

.page-content {
  flex: 1;
  padding: 1.5rem 0 2.5rem;
}

.page-content-title {
  color: #24292e;
  display: block;
  font-size: 1.6875rem;
  font-weight: 400;
  line-height: 1.25;
  margin: 0 0 1.5rem;
  text-transform: none;
  text-align: left;
}

.page-header {
  background-color: #fff;
  padding: 1.75rem 0 0;
}

.page-header-content {
  display: block;
}

.page-header-title {
  color: #24292e;
  display: block;
  font-size: 1.6875rem;
  font-weight: 400;
  line-height: 1.25;
  margin: 0;
  text-transform: none;
  text-align: left;
}

.opt {
  opacity: .5;
  cursor: pointer;
}

.opt:hover {
  opacity: 1;
}

</style>
