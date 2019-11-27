

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(response => {
    let posts = response.filter(i => i.title.split(" ").length > 6);
    console.log(posts);

    var wordmap = {};
    response.map(item => {item.body.split(' ').map(words => words.replace("\"","")).map(word => wordmap[word]? wordmap[word]++ : wordmap[word] = 1) });
    console.log(wordmap);
    
  }
    )