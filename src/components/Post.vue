<template>
      <h1>Composition API</h1>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
            <PostDetails :post="post"/>
      </div>
  </div>
</template>

<script>
import PostDetails from './PostDetails.vue'
export default {
    props: ['posts'],
    components: {
        PostDetails
    }
}
</script>

<style>

</style>