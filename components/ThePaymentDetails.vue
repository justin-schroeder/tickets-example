<template>
  <h2>Payment details</h2>
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
  <FormKit type="mask" name="cc_cvv" mask="###" label="Security code" overlay />
  <ThePrice
    :prices="value.tickets?.map(sumPrice) || []"
    prefix="Final price: "
  />
</template>
