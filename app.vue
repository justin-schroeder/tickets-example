<script setup lang="ts">
import ThePrice from "./components/ThePrice.vue";

async function submit() {
  await new Promise((r) => setTimeout(r, 2000));
  alert("Purchase complete! See you in 2024 🎉");
}
</script>

<template>
  <h1>VueConf US 2024</h1>
  <div class="container">
    <FormKit
      type="form"
      @submit="submit"
      submit-label="Purchase"
      #default="{ value }"
    >
      <h2>Personal details</h2>
      <FormKit
        label="Name"
        name="name"
        help="Ex: Michael Jordan."
        validation="required"
      />
      <FormKit
        label="Email"
        name="email"
        help="Ex: michael@example.com"
        validation="required|email"
      />
      <FormKit
        label="Street address"
        name="street"
        help="Ex: 1497 Großmannstraße"
        validation="required"
      />
      <FormKit
        label="City"
        name="city"
        help="Ex: Hamburg."
        validation="required"
      />
      <FormKit
        type="autocomplete"
        label="Country"
        name="country"
        :options="countries"
        help="Ex: Germany."
        validation="required"
      />
      <FormKit
        label="Postal code"
        name="postal_code"
        help="Ex: 20095."
        validation="required"
      />
      <h2>Ticket details</h2>
      <FormKit
        label="Workshops ($600)"
        name="workshop"
        type="dropdown"
        behavior="overscroll"
        :value="{ workshop: 'none', price: 0 }"
        :options="workshops"
        help="Select a workshop to attend."
      />
      <FormKit
        type="checkbox"
        name="massage"
        :on-value="5000"
        :off-value="0"
        label="Couple’s massage with Evan You ($5,000)"
      />
      <ThePrice prefix="Final price: " :prices="[sumPrice(value)]" />
    </FormKit>
  </div>
</template>
