//create a new post
async function createPost(){
const response  = await fetch ('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body:JSON.stringify({
        title: 'Kevin New post',
        body: 'Hello API wolrd',
        userId: '1',
    }),
    headers:{
        'Content-type': 'application/json',
    },
});
if(response.ok){
    console.log('This is a response ',await response.json());
}else{
    console.log('Creating a post failed');
}

}
createPost()
//get all posts
async function getPosts() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    data = await response.json()
    console.log(data)
    
    document.write('This are all posts',data[0].title)
}
getPosts()

//delete a post
async function deletePost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
        body: JSON.stringify({
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    })
    if(response.ok){
        data = await response.json();
        console.log('This your deleted post', data);
    }else{
        console.log('There was a problem deleting your post');
    }
}
deletePost();

//get a single post
async function getOnePost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:'GET',
        headers:{
            'Content-type': 'application/json',
        },
    });
    
    if(response.ok){
        const data =  await response.json();
        console.log('this is one post',data)
    }else{
        console.log('There was an error in getting your post');
    }
}
getOnePost()