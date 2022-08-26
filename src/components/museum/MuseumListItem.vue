<template>
  <ion-item>
    <ion-avatar>
      <img :src="(item as Creature).iconImage || (item as Item).image" />
    </ion-avatar>
    <ion-label>
      <h1>{{ item.name }}</h1>
      <h2>{{ (item as Creature).whereHow }}</h2>
    </ion-label>
  </ion-item>
</template>

<script setup lang="ts">
import { IonAvatar, IonItem, IonLabel } from '@ionic/vue';
import { Creature } from 'animal-crossing/lib/types/Creature';
import { Item } from 'animal-crossing/lib/types/Item';

defineProps<{ item: Creature | Item }>();
</script>

<style scoped>

</style>
