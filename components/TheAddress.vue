<template>
  <LayoutQuad>
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
  </LayoutQuad>
</template>
