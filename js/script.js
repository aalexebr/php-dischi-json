const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        axiosData:[]
      }
    },
    created(){
        axios.get('http://localhost/php-dischi-json/api.php',{})
            .then(result =>{
                console.log(result.data);
                this.axiosData = result.data
            });
    }
  }).mount('#app')