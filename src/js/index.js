const item = document.querySelectorAll('li')
const image = document.querySelectorAll('.image')
const category = document.querySelectorAll('.category')
const score = document.querySelectorAll('.score')

function insertData() {
    fetch('src/js/data.json').then((response)=>{
        response.json().then((data)=>{
            for(let i = 0; i<item.length; i++) {
                image[i].src = data[i].icon
                category[i].innerHTML  = data[i].category
                score[i].innerHTML = `${data[i].score} / 100`
            }
        })
        
    })
}

insertData()






