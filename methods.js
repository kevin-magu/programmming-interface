async function getPosts() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    data = await response.json()
    console.log(data)
    
    document.write('This are all posts',data[0].title)
}
getPosts()

//create a new post
async function createPost(){
    const response  = await fetch ('https://jsonplaceholder.typicode.com/post');
    
}
