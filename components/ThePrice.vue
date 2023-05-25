<script setup lang="ts">
const props = defineProps<{
  prices: Array<number | undefined>;
  prefix?: string;
}>();
const total = computed(() =>
  props.prices.reduce((a: number, b) => a + (b ?? 0), 0)
);
const format = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format;
</script>

<template>
  <div class="price">{{ prefix }}{{ format(total) }}</div>
</template>

<style scoped>
.price {
  font-size: 1.25em;
  font-weight: bold;
  margin-top: 2rem;
}
</style>
