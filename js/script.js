const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        axiosData:[],
        clickCardFlag: false,
        // closeOverlayFlag: false,
      }
    },
    methods:{
        clickCard(i){
            this.clickCardFlag = !this.clickCardFlag
            console.log(this.clickCardFlag,i)
        },
        closeOverlay(){
            this.clickCardFlag= !this.clickCardFlag
            console.log(this.clickCardFlag,'overlayflag',this.closeOverlayFlag,'x flag')
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