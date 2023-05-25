<template>
  <div class="triple">
    <slot />
  </div>
</template>

<style scoped>
.triple {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.triple:deep(> *) {
  width: calc(40% - 1em);
}
.triple:deep(> *:nth-child(3)) {
  width: calc(20% - 1em);
}
.triple:deep(.formkit-wrapper) {
  max-width: none;
}
</style>
