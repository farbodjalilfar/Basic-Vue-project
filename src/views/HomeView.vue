
<template>
  <div class="home">
    <h2>Welcome to MyCompany Inc.</h2>
    <p>Current Date & Time: {{ currentTime }}</p>
    <p>{{ temp }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { format } from 'date-fns'

const currentTime = ref(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
const temp = ref('Loading...')

const API_KEY = '770ff987dff27c26fbec45ae9dd2048d'

// Fetch weather data for Belleville
async function fetchTemperature() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Belleville,CA&units=metric&appid=${API_KEY}`
    )
    const data = await response.json()
    if (data?.main?.temp !== undefined) {
      temp.value = `Current Belleville Temperature: ${data.main.temp} °C`
    } else {
      temp.value = 'Temperature not available'
    }
  } catch (error) {
    console.error('Error fetching temperature:', error)
    temp.value = 'Error fetching temperature'
  }
}

onMounted(() => {
  fetchTemperature()
})
</script>

<style scoped>
.home {
  text-align: center;
  font-size: 20px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>
