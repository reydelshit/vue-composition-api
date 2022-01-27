import { ref } from '@vue/reactivity'


const getPosts = (id) => {

    const post = ref(null)
    const err = ref(null)

    const fetchPost = async () => {
      try {
        let fetchData = await fetch('http://localhost:3000/posts/' + id)
        if(!fetchData.ok){
          throw Error('bro stfu!')
        }
        post.value = await fetchData.json()
      }
      catch(error){
        err.value = error.message
      }
    }

    return {post, err, fetchPost}
}

export default getPosts