<template>
  <v-snackbar
    v-model="$store.state.toast.show"
    :timeout="$store.state.toast.timeout"
    :color="$store.state.toast.color"
    center
    :top="$store.state.toast.align==='top'"
    :left="$store.state.toast.align==='left'"
    :right="$store.state.toast.align==='right'"
    :bottom="$store.state.toast.align==='bottom'"
    :centered="$store.state.toast.align==='centered'"
    multi-line
  >
    <p class="mb-0 text-center text--primary">{{ $store.state.toast.msg }}</p>
  </v-snackbar>
</template>

<script>
export default {
  name: 'MyToast'
}
</script>

