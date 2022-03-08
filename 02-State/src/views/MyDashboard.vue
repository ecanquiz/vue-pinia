<script setup>
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'
import ComponentC from '@/components/ComponentC.vue'
import ComponentD from '@/components/ComponentD.vue'
import ComponentE from '@/components/ComponentE.vue'

</script>

<template>
  <div class="container mx-auto p-4">
    <div style="columns: 4">
      <div style="width: 100%; border-style: solid; padding: 10% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Component A</span>
        <ComponentA />
      </div>
      <div style="width: 100%; border-style: solid; padding: 10% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Component B</span>
        <ComponentB />
      </div>
      <div style="width: 100%; border-style: solid; padding: 10% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Component C</span>
        <ComponentC />
      </div>
      <div style="width: 100%; border-style: solid; padding: 10% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Component D</span>
        <ComponentD />
      </div>
      <div style="width: 100%; border-style: solid; padding: 10% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Component E</span>
        <ComponentE />
      </div>
    </div> 
  </div>  
</template>
