document.getElementById('upper-case').addEventListener('click',  () => {
    document.getElementById('text').value = document.getElementById('text').value.toUpperCase();
})

document.getElementById('lower-case').addEventListener('click',  () => {
    document.getElementById('text').value = document.getElementById('text').value.toLowerCase();
})

document.getElementById('proper-case').addEventListener('click',  () => {
    let text = document.getElementById('text').value;
    let lowerText = text.toLowerCase();
    let words = lowerText.split(' ')

    for(let i = 0; i < words.length; i++){
        if(words.length > 1){
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
    }

    document.getElementById('text').value = words.join(' ')
})

document.getElementById('sentence-case').addEventListener('click',  () => {
    let sentences = document.getElementById('text').value.toLowerCase().split('. ');

    for(let i = 0; i<sentences.length; i++){
        sentences[i].trim()

        if(sentences[i].length > 1){
            if(sentences[i][0] !== " "){
                sentences[i] = sentences[i][0].toUpperCase() + sentences[i].substr(1)

            } else {
                sentences[i] = sentences[i][1].toUpperCase() + sentences[i].substr(2)
            }
        }
    }
    document.getElementById('text').value = sentences.join('. ').trim()
})

document.getElementById('save-text-file').addEventListener('click',()=>{
    let text = document.getElementById('text').value;
    download('text', text)
})

function download(filename, text){
    let element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', filename)

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
}