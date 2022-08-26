<template>
  <ion-page>
    <menu-header title="Museum"></menu-header>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="top">
          <ion-tab-button tab="fish" href="/museum/fish/"> Fish </ion-tab-button>
          <ion-tab-button tab="insect" href="/museum/insect/"> Insects </ion-tab-button>
          <ion-tab-button tab="sea" href="/museum/sea/"> Sea </ion-tab-button>
          <ion-tab-button tab="fossil" href="/museum/fossil"> Fossils</ion-tab-button>
          <ion-tab-button tab="art" href="/museum/art/"> Art </ion-tab-button>
        </ion-tab-bar>
        <ion-router-outlet></ion-router-outlet>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { IonContent, IonTabs, IonTabButton, IonTabBar, IonRouterOutlet, IonPage } from '@ionic/vue';
import MenuHeader from '../components/menu/MenuHeader.vue';
</script>
