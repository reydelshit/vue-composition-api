<template>
    <div class="post">
          <router-link :to="{ name: 'PostDescription', params: {id: post.id}}">
                <h2>{{ post.title }}</h2>
        </router-link>
        <p>{{post.body.slice(0, 100)}}...</p>
        <span v-for="tags in post.tags" :key="tags">
           # {{tags}} 
        </span>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style>

</style>