<script setup>
import ComponentOptions from '@/components/ComponentOptions.vue'
import ComponentComposition from '@/components/ComponentComposition.vue'
import ComponentSetup from '@/components/ComponentSetup.vue'
import TodosApp from '@/components/TodosApp.vue'

</script>

<template>
  <div class="container mx-auto p-4">
    <div style="columns: 3">
      <div style="width: 100%; border-style: solid; padding: 10% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Options API</span>
        <ComponentOptions />
      </div>
      <div style="width: 100%; border-style: solid; padding: 10% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Composition API</span>
        <ComponentComposition />
      </div>
      <div style="width: 100%; border-style: solid; padding: 10% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Script Setup</span>
        <ComponentSetup />
      </div>
    </div>
    <div style="columns: 1">
      <div style="width: 100%; border-style: solid; padding: 5% 0%;">
        <span style="font-weight: bold; text-decoration: underline;">Todos</span>
        <TodosApp />
      </div>
    </div>
  </div>
  
  
</template>
