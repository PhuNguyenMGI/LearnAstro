<template>
  <div class="flex gap-y-6 flex-col">
    <!-- If have no slot, that mean it's default blog list -->
    <slot>
      <div v-for="item in props.listData" :key="`item_#${item.id}`" class="flex gap-6">
        <a :href="`${String(currentPath)}/${item.id}`" class="flex-shrink-0">
          <img
            :src="item?.image"
            :alt="item?.alttext"
            class="w-32 h-32 object-cover rounded-xl"
          />
        </a>
        <div>
          <a :href="`${String(currentPath)}/${item.id}`" class="font-bold text-xl">{{ item.title }}</a>
          <p class="line-clamp-3">{{ item.content }}</p>
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { BlogsData } from "../types/Blog";

interface IProps {
  listData: Array<BlogsData>;
  currentPath: string;
}

const props = withDefaults(defineProps<IProps>(),
  {
    listData: () => [],
  });

</script>
