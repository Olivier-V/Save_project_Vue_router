<template>
  <div>
    <todo-header />
    <router-view></router-view>
    <todo-footer/>
  </div>
</template>
<script>
import TodoHeader from '@/components/layout/TodoHeader.vue'
import TodoFooter from '@/components/layout/TodoFooter.vue'

export default {
  components:{
    TodoHeader,
    TodoFooter
  }
}
</script>

