
<template>
  <ion-app>
    <menu-drawer id="test"></menu-drawer>
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import MenuDrawer from '@/components/menu/MenuDrawer.vue';
</script>
<style scoped></style>
