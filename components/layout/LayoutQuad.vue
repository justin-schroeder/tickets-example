<template>
  <div class="quad">
    <slot />
  </div>
</template>

<style scoped>
.quad {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2em;
}
.quad:deep(> *){
  width: calc(25% - 1em);
}
.quad:deep(.formkit-wrapper) {
  max-width: none;
}
</style>