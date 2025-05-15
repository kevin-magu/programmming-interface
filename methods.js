//create a new post
async function createPost(){
const response  = await fetch ('https://jsonplaceholder.typicode.com/posts',{
    METHOD: 'POST',
    BODY:JSON.stringify({
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
        METHOD: 'DELETE',
        BODY: JSON.stringify({
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    })
}
deletePost();

//get a single post
async function getOnePost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        METHOD:'GET',
        BODY: JSON.stringify({
            userId: 1,
        }),
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