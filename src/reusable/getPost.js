import { ref } from '@vue/reactivity'


const getPost = () => {

    // onMounted(() => {
    //   fetch('http://localhost:3000/posts')
    //   .then((res) => res.json())
    //   .then((data) => posts.value = data)
    //   .catch((err) => {
    //     console.log(err.message)
    //   })
    // })

    const posts = ref([])
    const err = ref(null)

    const fetchPost = async () => {
      try {
        let fetchData = await fetch('http://localhost:3000/posts')
        if(!fetchData.ok){
          throw Error('bro stfu!')
        }
        posts.value = await fetchData.json()
      }
      catch(error){
        err.value = error.message
      }
    }

    return {posts, err, fetchPost}
}


export default getPost