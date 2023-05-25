<script setup lang="ts">
import ThePrice from "./components/ThePrice.vue";

async function submit() {
  await new Promise((r) => setTimeout(r, 100000));
  alert("Submitted! 🎉");
}
const initialValue = {
  name: "Justin",
  email: "justin@formkit.com",
  street: "5521 Filmore St.",
  city: "Charlottesville",
  country: "us",
  postal_code: "22903",
  tickets: [
    {
      workshop: {
        workshop: "patterns",
        price: 600,
      },
      massage: 0,
    },
    {
      workshop: {
        workshop: "reactivity",
        price: 600,
      },
    },
  ],
  payment_details: {
    street: "339 Grossman st",
    city: "Charlottesville",
    country: "au",
    postal_code: "22903",
    cc_number: "4242-1232-1342-3411",
    cc_expiration: "2027-12-25T06:00:00.000Z",
    cc_cvv: "112",
  },
};
</script>

<template>
  <h1>VueConf US 2024</h1>
  <div class="container">
    <FormKit
      type="form"
      @submit="submit"
      submit-label="Purchase"
      :value="initialValue"
      #default="{ value }"
    >
      <pre>{{ value }}</pre>
      <h2>Personal details</h2>
      <LayoutDouble>
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
      </LayoutDouble>
      <TheAddress />
      <h2>Ticket details</h2>
      <FormKit type="repeater" name="tickets" #default="{ value }">
        <LayoutTriple>
          <FormKit
            label="Workshops ($600)"
            name="workshop"
            type="dropdown"
            behavior="overscroll"
            :value="{ workshop: 'none', price: 0 }"
            :options="[
              { value: { workshop: 'none', price: 0 }, label: 'No workshop' },
              {
                value: { workshop: 'reactivity', price: 600 },
                label: 'Reactivity w/ Evan You',
              },
              {
                value: { workshop: 'intro', price: 600 },
                label: 'Getting started w/ Adam Jahr',
              },
              {
                value: { workshop: 'patterns', price: 600 },
                label: 'Proven patterns w/ Ben Hong',
              },
              {
                value: { workshop: 'testing', price: 600 },
                label: 'Testing w/ Jessica Sachs',
              },
              {
                value: { workshop: 'nuxt', price: 600 },
                label: 'Nuxt w/ Daniel Roe',
              },
              {
                value: { workshop: 'pinia', price: 600 },
                label: 'Pinia w/ Alex Kyriakidis',
              },
            ]"
            help="Select a workshop to attend."
          />
          <FormKit
            type="checkbox"
            name="massage"
            :on-value="5000"
            :off-value="0"
            label="Couple’s massage with Evan You ($5,000)"
          />
          <ThePrice :prices="[sumPrice(value)]" />
        </LayoutTriple>
      </FormKit>
      <h2>Payment details</h2>
      <FormKit type="group" name="payment_details">
        <TheAddress />
        <LayoutTriple>
          <FormKit
            type="mask"
            label="Credit Card"
            mask="####-####-####-####"
            name="cc_number"
            prefix-icon="visa"
            validation="required"
            overlay
          />
          <FormKit
            type="datepicker"
            name="cc_expiration"
            format="MMMM YYYY"
            label="Expiration date"
            overlay
            validation="required|date_after"
          />
          <FormKit
            type="mask"
            name="cc_cvv"
            mask="###"
            label="Security code"
            overlay
          />
        </LayoutTriple>
      </FormKit>
      <ThePrice
        :prices="value.tickets?.map(sumPrice) || []"
        prefix="Final price: "
      />
    </FormKit>
  </div>
</template>
