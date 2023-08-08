<template>
  <form @submit.prevent="onSubmit">
    <label>
      Username:
      <input v-model="username" type="text" minlength="1" id="username" name="username" />
    </label>
    <label>
      Password:
      <input v-model="password" type="password" minlength="1" id="password" name="password" />
    </label>

    <button>Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
const username = ref('');
const password = ref('');

const onSubmit = async () => {
    const data = await fetch('/api/login', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        })
    }).then(res => res.json());
    console.log(data);
    
    if (data.status) {
        document.cookie = `authToken=${data.token}`;
        window.location.href = '/';
    }
}
</script>