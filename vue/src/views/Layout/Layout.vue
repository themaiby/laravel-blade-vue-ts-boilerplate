<template>
  <span>I'm an layout</span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Layout' })
export default class Layout extends Vue {}
</script>

<style lang="scss" src="style.scss"></style>
