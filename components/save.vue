<v-menu
      open-on-hover
      top
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <!-- hamzaman v-for bezanam va link bezaram -->
          </v-list-item-content>
        </v-list-item> 
      </v-list>
    </v-menu>