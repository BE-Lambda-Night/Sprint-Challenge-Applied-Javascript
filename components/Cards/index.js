// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then((res) => {
    // console.log(res)
    // console.log(res.data)
    const theArticlesData = res.data.articles
    console.log(res.data.articles)
  })
  .catch((err) => {
    console.log("Error: ", err)
  })

function cardCreator(articleObject) {

  // createElement
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContain = document.createElement('div')
  const image = document.createElement('img')
  const authorSpan = document.createElement('span')

  // add classNames
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContain.classList.add('img-container')

  // add textContent and img src
  headline.textContent = article.headline
  img.src = article.authorPhoto
  authorSpan.textContent = "By " + article.authorName

  // append
  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContain)
  imgContain.appendChild(image)
  author.appendChild(authorSpan)

  // return
  return card

}
