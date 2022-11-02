// Arrays

let numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

function adder(number) {
  sum += number;
}

//One approach

numbers.forEach((element) => {
  sum += element;
});

// Other approach usign function

numbers.forEach(adder)

console.log(sum);

//Excersice 1 

const savePost = (post) => {console.log(post.title);};

function handlePosts() {
    let posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}
