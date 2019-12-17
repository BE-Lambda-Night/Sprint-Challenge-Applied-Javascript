// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then((res) => {
    // console.log(res)
    // console.log(res.data)
    const tabsData = res.data.topics
    // console.log(tabsData)
    tabsData.forEach(function(thing) {
      tabsDiv.append(tabCreator(thing))
    })
  })
  .catch((err) => {
    console.log("Error: ", err)
  })

const tabsDiv = document.querySelector('div.topics')
// console.log(tabsDiv)

function tabCreator(thingPassedIn) {
  const tabs = document.createElement('div')
  tabs.classList.add('tab')
  tabs.textContent = thingPassedIn
  return tabs
}