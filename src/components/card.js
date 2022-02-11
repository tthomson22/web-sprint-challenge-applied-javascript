import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  
  console.log('hello')
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContain = document.createElement('div')
  const image = document.createElement('img')
  const authorName = document.createElement('span')

  headline.textContent = article.headline
  image.src = article.authorPhoto
  authorName.textContent = `By ${article.authorName}`

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContain)
  author.appendChild(authorName)
  imgContain.appendChild(image)

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContain.classList.add('img-container')
  // console.log(article[0].headline)
  card.addEventListener('click', () => {
    console.log(article.headline)
  })

  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const parentElement = document.querySelector(selector)
  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      const data = res.data.articles
      console.log(data)
      for(let i = 0; i < data.javascript.length; i++){
        parentElement.appendChild(Card(data.javascript[i]))
      }
      for(let i = 0; i < data.bootstrap.length; i++){
        parentElement.appendChild(Card(data.bootstrap[i]))
      }
      for(let i = 0; i < data.technology.length; i++){
        parentElement.appendChild(Card(data.technology[i]))
      }
      for(let i = 0; i < data.jquery.length; i++){
        parentElement.appendChild(Card(data.jquery[i]))
      }
      for(let i = 0; i < data.node.length; i++){
        parentElement.appendChild(Card(data.node[i]))
      }
    })
}

export { Card, cardAppender }
