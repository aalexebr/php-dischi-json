const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        axiosData:[],
        clickCardFlag: false,
        // closeOverlayFlag: false,
        currentCardIndex: 0,
      }
    },
    methods:{
        clickCard(i){
            this.clickCardFlag = !this.clickCardFlag
            console.log(this.clickCardFlag,i)
            this.currentCardIndex = i
        },
        closeOverlay(){
            this.clickCardFlag= !this.clickCardFlag
            console.log(this.clickCardFlag,'overlayflag',this.closeOverlayFlag,'x flag')
            this.currentCardIndex = 0
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