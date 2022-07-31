const getPoemBtn = document.getElementById('get-poem')
const poemEl = document.getElementById('poem')
const poemURL = 'https://poetrydb.org/random,linecount/1;12/author,title,lines.json'

const getJSON = url => fetch(url).then(res => res.json())

const pipe = (...fns) => firstArg => fns.reduce((returnValue, fn) => fn(returnValue), firstArg)

const makeTag = tag => str => `<${tag}>${str}</${tag}>`

// complete this function
const makePoemHTML = (poemFields) => {
  console.log(poemFields) // Targets for building this function

  // creating img for background
  const scrollImage = document.createElement('img') 
  scrollImage.src = "scroll.png"
  poemEl.appendChild(scrollImage) // not sure how to do this...

  //adding title 
  const title = makeTag('h2')(poem[0].title)
  poemEl.appendChild(title)
 
}

// attach a click event to #get-poem
getPoemBtn.onclick = async function() {
  // renders the HTML string returned by makePoemHTML to #poem
  poemEl.innerHTML = makePoemHTML(await getJSON(poemURL))
}