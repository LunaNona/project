<template >
    <div>
<h2>راه اندازی</h2>
        <v-card v-for="item in texts">
            <p v-for="childItem in item.text" class="bm-1 tm-1">{{ item.text }}</p>
        </v-card>
    </div>
</template>
  
  <script lang="ts">
    import {Vue,Component} from "nuxt-property-decorator"
    export default  class QuickStart extends Vue{

    texts:any[]=[
        {id:0,
        note:"hi",
            text:"برای راه اندازی دستگاه نرولایت، می بایست در ابتدا هر سه سیم دستگاه را به آداپتور وصل کرده و به برق بزنید."},
        {id:1,
            note:"",
            text:"در صورتی که دستگاه به درستی به برق متصل شده باشد، هر سه لامپ یک لحظه روشن شده و آلارم متصل شدن به برق می دهند."},
        {id:2,
            note:"",
            text:"سپس توسط یک دستگاه موبایل یا تبلت، در تنظیمات بلوتوث، به لامپ ها که با نام fanoos نشان داده می شوند وصل می شویم ( هر سه لامپ ) و سپس وارد اپلیکیشن می شویم."},
        {id:3,
            note:"",
            text:"در اپلیکیشن ابتدا می بایست به اکانتی که در اختیار ما قرار داده شده است، وارد شویم. برای ورود می بایست موبایل به اینترنت متصل باشد، سپس نام کاربری و کلمه عبور خود را وارد کرده و سپس دکمه ورود را می زنیم."}
    ]}

    // @Component({
    //     components:{
            
    //     }
    // })
    </script>
