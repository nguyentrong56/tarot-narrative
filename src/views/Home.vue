<template>

    <v-app id ="inspire"  >

        <v-container fluid
        class="main" 
        fill-height
         >
          <v-progress-linear
        indeterminate
        color="yellow darken-2"
      ></v-progress-linear>
      <br>
      <v-progress-linear
        indeterminate
        color="green"
      ></v-progress-linear>
      <br>
 
            <v-row align="center" justify="center">
                 <v-col  sm="6">
            
                <v-card>

                <v-card-title class="justify-center" > Welcome to Tarot Based Story Generation. This is a platform to generate a movie-like story with the help of Tarot card system and Deep AI framework. The system would extract meaning from the cards then use AI to extend the meaning. We hope you will enjoy this. -Trong Nguyen-  </v-card-title>
                </v-card>
              
                 </v-col>
            </v-row>
                
           <v-row  justify="center">
            
                 <v-col sm="4"  offset-md="2">
                 
            
              <v-btn

                x-large
                color="success"
                dark
                @click="goToApp"
              >
                Enter Tarot System
              
              </v-btn>
             
             </v-col>
            </v-row>
                 <v-progress-linear
        indeterminate
        color="teal"
      ></v-progress-linear>
      <br>
      <v-progress-linear
        indeterminate
        color="cyan"
      ></v-progress-linear>
        </v-container>
      
   
    </v-app>
</template>
<script>
export default {
    name: "Home",
    methods:
     {
         goToApp()
         {
             console.log('click')
             this.$router.push('CardPage');
         }
     }
}
</script>

<style scoped>
.main
{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('../assets/backgrounds/tarot.jpg');
    background-size: cover;
}
</style>
