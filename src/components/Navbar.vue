<template>
  <nav class="navbar">
    <h1>MyCompany Inc.</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About Us</router-link></li>
      <li><router-link to="/services">Our Services</router-link></li>
      <li><router-link to="/customers">Our Customers</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  padding: 15px;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
ul {
  display: flex;
  gap: 15px;
  list-style: none;
}
a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}
</style>
