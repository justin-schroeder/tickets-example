<template>
  <div class="double">
    <slot />
  </div>
</template>

<style scoped>
.double {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2em;
}
.double:deep(> *){
  width: calc(50% - 1em);
}
.double:deep(.formkit-wrapper) {
  max-width: none;
}
</style>