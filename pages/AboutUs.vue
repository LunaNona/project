<template>

    <div class="container">
        <div>
            <v-card class="contactus-text-card black mt-3 " :opacity="0.8">
                <h1 class="flex justify-center align-center white--text">تماس با ما</h1>
                <div class="contactus-text"><p>متن</p></div>
                <br>
            </v-card>
        </div>
        <div class="contact-content-div">
            <!-- <font-awesome-icon :icon="['fas', 'forward']" rotation=180 /> -->
            <h1 class="contact-content-h1">در یک نگاه</h1>
        </div>
    </div>
</template>

<!-- <v-footer></v-footer> -->

<script lang="ts">
  import {Vue} from "nuxt-property-decorator"
  export default  class index extends Vue{

  }
</script>
<style>
    .container{
        max-width: 100%;
        margin: 0px;
        padding: 0px;
    }
    .contactus-text{
        opacity: 0.7;
        background-color: aliceblue;
        visibility: 0.7;
        margin: 20px;
        margin-top: 0px;
        padding: 10px;
        direction: rtl;
        align-items: center;
    }
    .contactus-text-card{
        margin-right:200px ;
        margin-left: 200px;

    }
    .contact-content{
        direction: rtl;
        margin-right: 70px;
        margin-left: 70px;
    }
    .contact-content-h1{
        margin-top: 30px;
        direction: rtl;
        margin-right: 110px;
    }
    .contact-content-div{
        background-image: url(https://cdn1.vectorstock.com/i/1000x1000/66/85/polygonal-3d-yellow-background-seamless-pattern-vector-20326685.jpg) ;
        background-attachment: fixed;
        background-size: cover;
    }
    </style>