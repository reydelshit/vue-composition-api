<template>
    <div>
        <button @click="back">back</button>
        <h1>{{post.title}}</h1>
        <p>{{ post.body }}</p>
        <span v-for="tag in post.tags" :key="tag">
            # {{tag}}
        </span>
    </div>
  
</template>

<script>
import getPosts from '../reusable/getPosts'

export default {

    // data(){
    //     return{
    //         posts: []
    //     }
    // },
    // mounted(){
    //     fetch('http://localhost:3000/posts/' + this.id)
    //     .then((res) => res.json)
    //     .then((data) => this.posts = data)
    //     .catch((err) => console.log(err))
    // }

    props: ['id'],

    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    setup(props){
        const {post, fetchPost} = getPosts(props.id)

        fetchPost()

        return {post}
    }


}
</script>

<style>

</style>