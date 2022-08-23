<template>
  <menu-header title="About"></menu-header>
  <ion-content class="ion-padding">
    <div id="container">
      <strong>Base Vite/Ionic Boilerplate</strong>
      <p>
        Start with Ionic
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
          >UI Components</a
        >
      </p>
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import { IonContent } from '@ionic/vue';
import MenuHeader from '../components/menu/MenuHeader.vue';
</script>
