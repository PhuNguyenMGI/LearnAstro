<template>
  <div class="w-[800px] flex gap-y-6 flex-col">
    <!-- If have no slot, that mean it's default blog list -->
    <slot>
      <div v-for="item in props.listData" :key="`item_#${item.id}`" class="flex gap-6">
        <a :href="`blog/${item.id}`">
          <img
            :src="item.image"
            :alt="item.alttext"
            class="w-32 h-32 object-cover rounded-xl"
          />
        </a>
        <a :href="`blog/${item.id}`" class="font-bold text-xl">{{ item.title }}</a>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { BlogsData } from "../types/Blog";

interface IProps {
  listData: Array<BlogsData>;
}

const props = withDefaults(defineProps<IProps>(),
  {
    listData: () => [],
  });

</script>
