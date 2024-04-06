const posts = [{title:'post one', body:'This is post one'},
{title:'post two', body:'This is post two'}
]

function createPost(post, cb){
    setTimeout(function(){
        posts.push(post)
        cb()
    }, 3000)
};

function getPosts(){
    let output = ''
    posts.forEach(function(post){
        output += `<li>${post.body}</li>`
        document.body.innerHTML = output;
    })
}

createPost({title:'post three', body:'This is post three'}, getPosts);
getPosts()