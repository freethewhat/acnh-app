<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import MenuDrawer from './components/menu/MenuDrawer.vue';
</script>

<template>
  <ion-app>
    <menu-drawer></menu-drawer>
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<style scoped></style>
