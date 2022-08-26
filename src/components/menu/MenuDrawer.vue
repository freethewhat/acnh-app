<template>
  <ion-menu side="start" menu-id="menu-content" content-id="main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content id="menu-content">
      <ion-list>
        <ion-item href="/">
          <ion-icon slot="start" :icon="mail"></ion-icon>
          <ion-label name="IonLabel">Home</ion-label>
        </ion-item>
        <ion-item href="/about">
          <ion-icon slot="start" :icon="help"></ion-icon>
          <ion-label>About</ion-label>
        </ion-item>
        <ion-item href="/museum">
          <ion-icon slot="start" :icon="build"></ion-icon>
          <ion-label>Museum</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';

import { help, mail, build } from 'ionicons/icons';
</script>

<style scoped></style>
