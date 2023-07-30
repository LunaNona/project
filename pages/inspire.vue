<template class="whole-page">
  <div>
    <header class="nav-content">
    <ul >
      
      <li><a href="">ارتباط با ما</a></li>
      <li><a href="">درباره ما</a></li>
      <li><a href="">مشتریان</a></li>
      <li><a href="">محصولات</a></li>
      <li><a href="">همکاری</a></li>
      <li><a href="">خانه</a></li>
      
      
    </ul>

    <div class="ravanlog">
      <ravanlog/>
    </div>
  </header>

  <v-carousel class="banners">
    <v-carousel-item
      src="http://parscognition.ir/wp-content/uploads/2017/12/S1N-1280x529.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="http://parscognition.ir/wp-content/uploads/2022/02/1.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="http://parscognition.ir/wp-content/uploads/2022/02/2.jpg"
      cover
    ></v-carousel-item>
    <v-carousel-item
      src="http://parscognition.ir/wp-content/uploads/2022/02/3.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="http://parscognition.ir/wp-content/uploads/2022/02/41-1280x530.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="http://parscognition.ir/wp-content/uploads/2022/02/Untitled5.jpg"
      cover
    ></v-carousel-item>
    <v-carousel-item
      src="http://parscognition.ir/wp-content/uploads/2022/02/Untitled10-1280x530.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>

  <v-app>
    <v-main class="main">
      <div class="article">
        <h1 class="article-content1">درباره ما</h1>
        <h1 class="article-content2">شرکت دانش‌بنیان و دانشگاهی فناوران‌شناختی پارس از سال ۱۳۹۲، با همکاری جمعی از متخصصان علوم‌اعصاب‌شناختی، روان‌شناسی‌شناختی، کامپیوتر، هوش‌مصنوعی و مدل‌سازی فعالیت خود را در قالب تحقیقات
           در تاثیرگذاری بازیهای شناختی شروع کرد. از سال ۱۳۹۹ این شرکت بصورت جدی وارد بازار مدارس و کلینیکهای توانبخشی گردید. برای اطلاع بیشتر از این محصولات به بخش محصولات شرکت مراجعه نمایید.
        </h1>
      </div >
      
      <div class="maghzineh-logo"><maghzineh/></div>
        <br>

      <h1 class="products">محصولات</h1>
      <div class="products-container">
      <div class="products-content-logo" id="school-logo">
        <a href="">
          <schoolIcon/>
          <p class="school">مغزینه مدارس</p>
        </a>
      </div>

      <div class="products-content-logo" id="hospital-logo">
      <a href="">
        <hospitalIcon/>
        <p class="hospital">معزینه کلینیک</p>
      </a>
    </div>

    <div class="products-content-logo" id="gaming-logo">
      <a href="" >
        <gamingIcon/>
        <p class="gaming">بازی شناختی/مغزینه</p>
      </a>
    </div>
    </div>

    <div class="row-cooporation-container">
      <div><p>همکاران ما</p></div>
      <div class="cooporation-container">
        <div class="atieh"><a href=""><img src="http://parscognition.ir/wp-content/uploads/2018/05/atiehback_21.png" alt=""></a></div>
        <div class="shariati"><a href=""><img src="http://parscognition.ir/wp-content/uploads/2018/05/shariatihos.png" alt=""></a></div>
        <div class="tehran"><a href=""><img src="http://parscognition.ir/wp-content/uploads/2018/05/tehranuni.png" alt=""></a></div>
        <div class="oloum"><a href=""><img src="http://parscognition.ir/wp-content/uploads/2018/05/azaduni.png" alt=""></a></div>
      </div>
    </div>

    <div class="latest-news-container-rows">
      <h1>اخرین اخبار</h1>
      <div class="latest-news-container-columns">
        
        
        <div class="latest-news-content-rows3">
          <div><a href="http://parscognition.ir/1400/10/28/1093/"><img src="http://parscognition.ir/wp-content/uploads/2022/01/Image-219-e1643192856690-410x298.jpg" alt=""></a></div>
          <div><a href="http://parscognition.ir/1400/10/28/1093/" class="text">مغزینه: منتخب برگزیده بازی آپدیت شده در بخش جایزه بازی های جدی SeGap 2020</a></div>
        </div>

        <div class="latest-news-content-rows2">
          <div><a href=""><img src="http://parscognition.ir/wp-content/uploads/2022/01/DGRC-2018-Maghzineh-Clinic-e1643191940874-410x285.jpeg" alt=""></a></div>
          <div><a href="" class="text">مغزینه کلینیک: کسب مقام دوم در رقابت فینالیست های بازی های جدی SeGap2018</a></div>
        </div>
        
        <div class="latest-news-content-rows1">
          <div><a href=""><img src="http://parscognition.ir/wp-content/uploads/2019/08/MaghzinehForHeartSurgery263-410x273.jpg" alt=""></a></div>
          <div><a href="" class="text">تاثیر مغزینه بر روی بیماران جراحی عمل قلب باز</a></div>
        </div>
       

      </div>
    </div>
    <div class="news-button-div">
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn
          height="72"
          min-width="164"
          color="#436039"
          class="news-button"
        >
        <a href=""> مشاهده همه اخبار</a>
         
        </v-btn>
      </v-col>
    </v-row>
  </div>
  </v-main>
  </v-app>

  <v-footer class="whole-footer">
    <div class="whole-footer">
    <div class="contact-us">تماس با ما</div>
    <div class="contact-columns">
      
      <div>
        <!--empty-->
      </div>

      <div class="contact-column2-rows">

        <div class="contact-address">
          
          <p>تهران، کارگر شمالی، خیابان ۱۶ (فرشی مقدم)، پارک علم و فناوری دانشگاه تهران، ساختمان شماره ۲، طبقه دوم، واحد ۳۰۵</p>
        </div>

        <div class="contact-number">

          <p>تلفن: ۰۲۱۸۶۰۹۳۷۵۱</p>
        </div>

        <div class="contact-email">
          
          <a href="">contact@parscognition.ir</a>
        </div>
      </div>
      <div class="div-logo"> <!-- ??????????????????????????????????-->
        <div><contactHouse/></div>
        <div><contactPhone/></div>
        <div><contactEmail/></div>
      </div>
      <div class="ravanlog-footer"><ravanlog2/></div>
     
    </div>
  </div>
  </v-footer>
</div>  

</template>


<script>
import ravanlog from '~/components/ravanlog.vue'
import maghzineh from '~/components/maghzineh.vue'
import hospitalIcon from '~/components/hospitalIcon.vue'
import gamingIcon  from '~/components/gamingIcon.vue'
import schoolIcon from '~/components/scoolIcon.vue'
import ravanlog2 from '~/components/ravanlog2.vue'
import contactEmail from '~/components/contact-email.vue'
import contactPhone from '~/components/contact-phone.vue'
import contactHouse from '~/components/contact-house.vue'
export default {
components: {
  ravanlog ,
  maghzineh ,
  hospitalIcon ,
  gamingIcon , 
  schoolIcon ,
  ravanlog2 ,
  contactEmail,
  contactPhone,
  contactHouse
}

}

</script>
<style>
@media(max-width: 480px){
  
}
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
  margin-right: 30px;
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
    background-image: url();
  }
  .nav-content{
    margin-top: 0px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    background-color: antiquewhite;
    /* position: sticky; */
  }

  .nav-content ul{
    display: flex;
    list-style-type: none;
    margin-top:auto;
    margin-bottom: auto;
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
  width: 200px;
}
.shariati a img{
  height: 180px;
  width: 200px;
}
.tehran a img{
  height: 180px;
  width: 200px;
}
.oloum a img{
  height: 180px;
  width: 200px;
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
  direction: rtl;
}
.text{
  direction: rtl;  /*neveshte ha ham andaze aks ha beshan*/
  width: 300px;
  display: flex;
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
.div-logo{

}
</style>
