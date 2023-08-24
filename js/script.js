const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    created(){
        axios.get('http://localhost/php-dischi-json/api.php',{})
            .then(result =>{
                console.log(result.data);
            });
    }
  }).mount('#app')