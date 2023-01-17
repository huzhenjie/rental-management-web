<template>
  <div>
    <v-app-bar
      flat
    ></v-app-bar>
    <v-main class="px-4 py-6">
      <p class="text-h3 font-weight-bold">¥774.50</p>
      <p>2022-11-1 至 2022-11-30</p>

      <v-list
        subheader
        two-line
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              class="purple lighten-1"
              dark
            >
              mdi-clipboard-text
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>月租</v-list-item-title>
            <v-list-item-subtitle>2022-11</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text class="text-h6">700元</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              class="yellow darken-2"
              dark
            >
              mdi-lightning-bolt
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>电费</v-list-item-title>
            <v-list-item-subtitle>2022-11</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text class="text-h6">700元</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              class="blue lighten-1"
              dark
            >
              mdi-water
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>水费</v-list-item-title>
            <v-list-item-subtitle>2022-11</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text class="text-h6">700元</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              class="indigo lighten-1"
              dark
            >
              mdi-account-tie-woman
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>物业管理费</v-list-item-title>
            <v-list-item-subtitle>2022-11</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text class="text-h6">700元</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'ShareOrder'
}
</script>

<style scoped>

</style>
