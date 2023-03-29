const columns = document.querySelectorAll('.column');

document.addEventListener('keydown', e =>{
  e.preventDefault()
  if (e.code.toLowerCase() === 'space'){
    setRandomColors()
  }
})

function generateColor(){
   const hexCodes = '0123456789ABCDEF'
   let color = ''
   for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
   }
   return '#' + color
}

function setTextColor(text, color){
  const luminance = chroma(color).luminance()
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

document.addEventListener('click', e => {
  const type = e.target.dataset.type

  if (type === 'lock'){
    const node = e.target.tagName.toLowerCase() === 'i'
     ? e.target 
     : e.target.children[0]
    
     node.classList.toggle('fa-lock-open')
     node.classList.toggle('fa-lock')
  } else if (type === 'copy') {
    copyToClipboard(e.target.textContent)
  }
})


function copyToClipboard(text){
  return navigator.clipboard.writeText(text)
}

function setRandomColors(isInitial) {
  const colors = isInitial ? getColorsFromHash() : []

  columns.forEach((column, index) => {
    const isLocked = column.querySelector('i').classList.contains('fa-lock')
    const text = column.querySelector('h2')
    const button = column.querySelector('button')
    
    if (isLocked){
      colors.push(text.textContent)
      return
    } 
    
    const color = isInitial 
    ? colors[index] 
      ? colors[index]
      : chroma.random()
    : chroma.random()

    if (!isInitial){
      colors.push(color)
    }

    // const color = generateColor()

    text.textContent = color
    column.style.background = color

    setTextColor(text, color)
    setTextColor(button, color)
  })

  updateHashColors(colors)
}

function updateHashColors(colors = []) {
  document.location.hash = colors.map((column) => {
    return column.toString().substring(1)
  }).join('-')
  }

function getColorsFromHash() {
  if (document.location.hash.length > 1) {
    return document.location.hash
    .substring(1)
    .split('-')
    .map((color) => '#' + color)
  }
  return []
}

setRandomColors(true);