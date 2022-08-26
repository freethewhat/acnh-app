<template>
  <ion-page>
    <MenuHeader title="Menu"></MenuHeader>
    <ion-content class="ion-padding">
      <div id="container">
        <strong>Ready to create an app?</strong>
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
  </ion-page>
</template>
<script setup lang="ts">
import { IonContent } from '@ionic/vue';
import MenuHeader from '../components/menu/MenuHeader.vue';
</script>
