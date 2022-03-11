<template>
  <div>
    <todo-header />
    <router-view></router-view>
  </div>
</template>
<script>
import TodoHeader from '@/components/layout/TodoHeader.vue'
export default {
  components:{
    TodoHeader
  }
}
</script>

