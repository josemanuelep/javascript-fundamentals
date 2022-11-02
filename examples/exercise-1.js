
//Excersice 1 using arrow functions

const savePost = (post) => {console.log(post.title);};

const handlePosts = ()=>{
  let posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach(savePost)

};

function handlePostsStandart() {
    let posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach(savePost);
}

handlePosts();
