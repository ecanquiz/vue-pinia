<script setup>
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'

</script>

<template>
  <div class="container mx-auto p-4">
    <div style="columns: 2">
      <div style="width: 100%; border-style: solid; padding: 10% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Component A</span>
        <ComponentA />
      </div>
      <div style="width: 100%; border-style: solid; padding: 10% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Component B</span>
        <ComponentB />
      </div>
    </div>    
  </div>  
</template>