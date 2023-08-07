<template class="background-page">
    <div class="container">
    <div class="background-page">
        
    <v-card class="card-page">
       
       <h1 class="texts-main ma-2 text-right">راه اندازی</h1>
       <div class="texts-main ma-3 text-right " v-for="item in texts" :key="item.id">
            <span class="mb-2">
                {{ item.text }}
                <br>
            </span>
            <li v-for="subItem in item.items">{{ subItem }}</li>
            <img class="texts-main-image" v-if="item.img" width="400" :src="item.img" alt="">

        </div>
        <div>
            <h1 class="texts-notice ma-3">نکات</h1>
            <div class="texts-notice ma-3 " v-for="item in notices" :key="item.number">
                <span>
                    {{ item.note }}
                </span>
            </div>
        </div>
    </v-card>
</div>
</div>
<!-- <v-footer></v-footer> -->
</template>
<script lang="ts">
import {Vue,Component} from "nuxt-property-decorator"
import neuro from "~/components/Neuro.vue"
import quick from "~/assets/files/quickStart"
import notes from "~/assets/files/quickStartNote"
@Component({
    components: {
        neuro
      }    })

export default  class QuickStart extends Vue{
    texts :any= quick
    notices :any= notes
}

</script>

<style>
.card-page{
    margin-left: 160px;
    margin-right: 160px;
}
.container{
    max-width: 100%;
    padding: 0;
    margin: 0;
}
.flex{
    display: flex;
    flex-direction: column;
}
.background-page{

    background-image: url();
    background-attachment: fixed;
    background-size: cover;
}
.texts-main{
    direction: rtl;
    text-align: right;
}
.texts-main-image{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.texts-notice{
    direction: rtl;
    text-align: right;    
}
.toolbar-quick{

}
</style>