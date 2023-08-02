
<template >
  <div>
    <v-btn v-for="item in a">
      {{ item }}
    </v-btn>
  </div> 
</template>

<script lang="ts">
  import {Vue} from "nuxt-property-decorator"
  export default  class index extends Vue{
    text="nima"
    a=["n","f"]
    created(){
      console.log("hello")
    }
    hi(){
      console.log("Helloi")
    }
    //           text: ' بازی شناختی/مغزینه' ,
    //           link:'http://parscognition.ir/%d8%a8%d8%a7%d8%b2%db%8c%e2%80%8c%d9%87%d8%a7%db%8c-%d8%b4%d9%86%d8%a7%d8%ae%d8%aa%db%8c/'},
    //         { title: 'Click Me',
    //           text: 'مغزینه کلینیک' ,
    //           link:'http://parscognition.ir/%da%a9%d9%84%db%8c%d9%86%db%8c%da%a9%e2%80%8c%d9%87%d8%a7%db%8c-%d8%b1%d9%88%d8%a7%d9%86%d8%b4%d9%86%d8%a7%d8%b3%db%8c-%d9%88-%d8%b1%d9%88%d8%a7%d9%86%d9%be%d8%b2%d8%b4%da%a9%db%8c/'},
    //         { title: 'Click Me',
    //           text: 'مغزینه مدارس',
    //           link:'http://parscognition.ir/%d9%85%d8%ba%d8%b2%db%8c%d9%86%d9%87-%d9%85%d8%af%d8%a7%d8%b1%d8%b3/' }
    //       ],
    //       cooparation: [
    //         {text:"دانشکده روانشناسی و علوم تربیتی دانشگاه تهران",
    //         link:"https://psyedu.ut.ac.ir/"},
    //         {
    //           text:"دانشکده روانشناسی دانشگاه آزاد اسلامی-واحد علوم تحقیقات",
    //           link:"https://srbiau.ac.ir/fa"
    //         },
    //         {
    //           text:"کلینیک آتیه",
    //           link:"https://atiehclinic.com/"
    //         },
    //         {
    //           text:"بیمارستان شریعتی",
    //           link:"https://shariati.tums.ac.ir/"
    //         }
    //       ],
    //       costumer: [
    //         {text:"کلینیک مغز و شناخت",
    //         link:"https://bcclinic.ir/"},
    //         {text:"کلینیک چند تخصصی درد آرامش",
    //         link:"https://coolaser.clinic/ar/lecheniye-stvolovimi-kletkami/"},
    //         {text:"کلینیک آسایش",
    //         link:"http://parscognition.ir/#"},
    //         {text:"کلینیک دانشگاه الزهرا",
    //         link:"https://www.alzahra.ac.ir/"},
    //         {text:"مدارس سلام",
    //         link:"https://www.salamsch.com/"},
    //         {text:"مدارس فرزانگان",
    //         link:"http://farzanegan1edu.ir/"},
    //         {text:"باشگاه دانش آموزی دانشگاه تهران",
    //         link:"https://tcs.ut.ac.ir/"}

    //       ]
    //     }
    //   )
    }

</script>
<style>
  
  .row-cooporation-container{
    display: grid;
    grid-template-rows: auto;
    background-color: black;
    opacity: 0.7;
    background-attachment: fixed;
    background-image: url(https://cdn1.vectorstock.com/i/1000x1000/66/85/polygonal-3d-yellow-background-seamless-pattern-vector-20326685.jpg);
    background-size: cover;
  }
  .row-cooporation-container p{
    display: flex;
    justify-content: center;
    color: aliceblue;
    font-size: 25px;
    font-weight: bold;
  }

  .cooporation-container{ 
    display: grid;
    grid-template-columns: repeat(4,auto);
    margin-right: 60px;
    margin-left: 80px;
  }
  .products{
    display: flex;
    justify-content: center;
    color: darkgoldenrod;
    margin-top: 150px;
    margin-bottom: 40px;
  }
  .products-container{
    display: grid;
    grid-template-columns: repeat(3 ,auto);
    margin-bottom: 100px;
  }
  #school-logo{
    display: flex;
    justify-content: center;
  }
  #hospital-logo{
    display: flex;
    justify-content: center;
  }
  #gaming-logo{
    display: flex;
    justify-content: center;
  }
  .products-content-logo p{
        display: flex;
        justify-content: center;
        
        color: rgb(128, 95, 12);
      }
  .products-content-logo:hover{
    text-decoration: underline;
    transform: scale(1.125);

  }
  .products-content-logo a{
      text-decoration: none;
  }
  .whole-page{
    background-color: antiquewhite;
    /* width:100vw;
    height: 100vh; */
    width: 100%;
  }
  .nav-content{
    margin-top: 0px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    background-color: antiquewhite;
    /* position: sticky; */
  }
  .text-center-content{
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    margin-left: 10px;
  }
  .text-center{
    display: flex;
    flex-wrap: wrap;
    margin-top:auto;
    margin-bottom: auto;
    justify-content: center;
    align-items: center;
  }
  .text-center menu{
    width: 100px;
    margin-right: 20px;
    margin-left: 20px;
    height: auto;
    transition: background-color="#436039";
  }
  
  .nav-content ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin-top:auto;
    margin-bottom: auto;
    justify-content: center;
    align-items: center;
  }

  .nav-content ul li a{
    text-decoration: none;
    padding: 8px;   
  }
  .nav-content ul li a:hover{
    color: darkslategrey;
    text-decoration: underline;
  }

  .ravanlog{
    margin-top:auto;
    margin-bottom: auto;
  }
  .main{
    background-color: antiquewhite;
  }
  .article{
    /* flex-wrap: wrap; */
    justify-content: center;
    background-color: antiquewhite;
  }
  .article h1{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .article-content1{
    color: darkgoldenrod;
  }
  .article-content2{
    direction: rtl;
    padding: 10px;
    font-size: 20px;
  }
  .maghzineh-logo{
    display: flex;
    justify-content: center;
    background-color: antiquewhite;
    margin-top: 50px;
  }
  .atieh a img{
    height: 180px;
    width: auto;
  }
  .shariati a img{
    height: 180px;
    width: auto;
  }
  .tehran a img{
    height: 180px;
    width: auto;
  }
  .oloum a img{
    height: 180px;
    width: auto;
  }

  .atieh a img:hover {
    opacity: 0.7;
    /* why transform doesnt work????????????????????????????????????? */
  }
  .shariati a img:hover{
    opacity: 0.7;
  }
  .tehran a img:hover{
    opacity: 0.7;
  }
  .oloum a img:hover{
    opacity: 0.7;
  }
  .latest-news-container-rows{
    display: grid;
    grid-template-rows: repeat(3,auto);
    margin-left: 15px;
    margin-right: 15px;
  }
  .latest-news-container-rows h1{
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
    color: darkgoldenrod;
  }
  .latest-news-container-columns{
    display: grid;
    grid-template-columns: repeat(3,auto);
    gap: 20px;
  }
  .latest-news-content-rows3 a img{
    display: flex;
    justify-content: center;
    width: 300px;
  }
  .latest-news-content-rows2 a img{
    width: 300px;
    display: flex;
    justify-content: center;
  }
  .latest-news-content-rows1 a img{
    width: 300px;
    display: flex;
    justify-content: center;
  }
  .text{
    text-decoration: none;
    direction: rtl;  /*neveshte ha ham andaze aks ha beshan*/
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .latest-news-content-rows3:hover{
    text-decoration: underline;
    transform: scale(1.05);
  }
  .latest-news-content-rows2:hover{
    text-decoration: underline;
    transform: scale(1.05);
  }
  .latest-news-content-rows1:hover{
    text-decoration: underline;
    transform: scale(1.05);
  }
  .news-button-div{
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: right;
  }
  .news-button a{
    color: rgb(137, 205, 144);
    text-decoration: none;
  }
  /* .news-button a:hover{
    color: white;
  } */
  .whole-footer{
    background-color: black;/*????????????????????????*/ 
    /* padding-right: 0px; */
    opacity: 0.9;
    display: grid;
    grid-template-rows: repeat(2,auto);
    margin-bottom: 20px;
  }
  .contact-us{
    color: darkgoldenrod;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .contact-columns{
    display: grid;
    grid-template-columns: auto 300px 50px 400px;
    margin-bottom: 20px;

  }
  .contact-column2-rows{
    display: grid;
    grid-template-rows: repeat(3,auto);
  }
  .contact-address{
    font-weight: bold;
    direction: rtl;
    /* display: grid;
    grid-template-columns: repeat(2,auto); */
  }
  .contact-address p{
    color: aliceblue;
  }
  .contact-number {
    font-weight: bold;
    direction: rtl;
    /* display: grid;
    grid-template-columns: repeat(2,auto); */
  }
  .contact-number p{
    color: aliceblue;
  }
  .contact-email{
    font-weight: bold;
    direction: rtl;
    /* display: grid;
    grid-template-columns: repeat(2,auto); */
  }
  .contact-email a{
    text-decoration: none;
    color:#436039;
  }
  .contact-email a:hover{
    color: aliceblue;
  }
  .ravanlog-avatar{
    width:40px;
    height: 20px;
  }
  /* div{
    width: 100%;

  } */   /*in age ezafe beshe v-carousel taghir peyda mikone*/ 
  .div-logo{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .nav-menu-home{
    direction: rtl;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: right; */
    display: block;
    background-color: #689F38;
    text-decoration: none; 
  }
  .nav-menu-home:hover{
    display: block;
    color: aliceblue;
    width: auto;
    transition-delay: 0.25s;
    
  }
  .nav-list-item-content .nav-menu-home .v-text{
    color: aliceblue;
  }
</style>
