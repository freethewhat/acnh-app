<template>
  <ion-page>
    <ion-content>
      <ion-searchbar :value="searchValue" @ion-change="searchHandler"></ion-searchbar>
      <div id="container">
        <ion-list>
          <museum-list-item v-for="(item, index) in filteredListItems" :key="index" :item="item" />
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { IonList, IonPage, IonContent, IonSearchbar, SearchbarChangeEventDetail } from '@ionic/vue';
import { computed, defineComponent, ref } from 'vue';
import { creatures, items } from 'animal-crossing';
import { Creature, CreatureSourceSheet } from 'animal-crossing/lib/types/Creature';
import { Item, ItemSourceSheet } from 'animal-crossing/lib/types/Item';
import { useRoute } from 'vue-router';
import MuseumListItem from './MuseumListItem.vue';

const museumMap: { [key: string]: () => Creature[] | Item[] } = {
  fish: () => creatures.filter((creature) => creature.sourceSheet === CreatureSourceSheet.Fish),
  insect: () =>
    creatures.filter((creature) => creature.sourceSheet === CreatureSourceSheet.Insects),
  sea: () =>
    creatures.filter((creature) => creature.sourceSheet === CreatureSourceSheet.SeaCreatures),
  art: () => items.filter((item) => item.sourceSheet === ItemSourceSheet.Artwork && item.genuine),
  fossil: () => items.filter((item) => item.sourceSheet === ItemSourceSheet.Fossils),
};

const route = useRoute();
const sourceSheet = route.params.sourceSheet as string;

const listItems = computed(() => museumMap[sourceSheet]());

const filteredListItems = computed(() => {
  if (searchValue.value.length > 3) {
    return (listItems.value as []).filter((item: Creature | Item) =>
      (item.name as string).includes(searchValue.value)
    );
  } else {
    return listItems.value;
  }
});

const searchValue = ref('');

const searchHandler = (event: SearchbarChangeEventDetail) => {
  console.log(event);
};
</script>
