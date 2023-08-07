import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#121212', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
// import { createVuetify } from 'vuetify'
// import { aliases, fa } from 'vuetify/iconsets/fa'
// import { mdi } from 'vuetify/iconsets/mdi'

// export default createVuetify({
//   icons: {
//     defaultSet: 'fa',
//     aliases,
//     sets: {
//       fa,
//       mdi,
//     },
//   },
// })