// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const mainHeader = document.querySelector('div.header-container')
// console.log(mainHeader)
mainHeader.appendChild(Header())

function Header() {

  // createElement
  const header = document.createElement('div')
  const span = document.createElement('span')
  const header1 = document.createElement('h1')
  const secondSpan = document.createElement('span')

  // add classes
  header.classList.add('header')
  span.classList.add('date')
  secondSpan.classList.add('temp')

  // textContent
  span.textContent = "SMARCH 28, 2019"
  header1.textContent = "Lambda Times"
  secondSpan.textContent = "98°"

  // append
  header.appendChild(span)
  header.appendChild(header1)
  header.appendChild(secondSpan)

  // return header
  return header
}
