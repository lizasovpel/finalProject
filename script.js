let locations = []
const login = document.querySelector('#login') 
const mainMenu = document.querySelector('#mainMenu') 
const desserts = document.querySelector('#desserts') 
const meat = document.querySelector('#meat') 
const salads = document.querySelector('#salads') 
const dessert1 = document.querySelector('#dessert2') 
const dessert2 = document.querySelector('#dessert4') 
const dessert3 = document.querySelector('#dessert6') 
const salad1 = document.querySelector('#salad3') 
const salad2 = document.querySelector('#salad1') 
const salad3 = document.querySelector('#salad7') 
const meat1 = document.querySelector('#meat2') 
const meat2 = document.querySelector('#meat8') 
const meat3 = document.querySelector('#meat4') 

locations.push(login, mainMenu, desserts, meat, salads, dessert1, dessert2, dessert3, salad1, salad2, salad3, meat1, meat2, meat3)

const formLogin = document.querySelector('.formlogin') 
const loginInput = document.querySelector('#inputLogin') 
const passwordInput = document.querySelector('#inputPassword') 


let currentUser = localStorage.getItem('active')
let users = JSON.parse(localStorage.getItem('users')) || {}


// вход в личный кабинет 
formLogin.addEventListener('submit', function (e) {
    e.preventDefault()
    if (loginInput.value) {
        currentUser = loginInput.value
        localStorage.setItem('active', loginInput.value)
        location.hash = '#notes'
        console.log(currentUser)
    }
})

function locationChanged() {
    locations.forEach(el => {
        el.hidden = true
        console.log(el)
    })

    // switch (location.hash) {
    //     case '#login':
    //     case '':
    //         if (!currentUser) {
    //             login.hidden = false
    //         } else {
    //             location.href = '#notes'
    //         }
    //         break
    //     case '#notes':
    //         if (currentUser) {
    //             notesContainer.innerHTML = ''
    //             if (users[currentUser]) {
    //                 users[currentUser].forEach(addNote)
    //             }
    //             notes.hidden = false
    //             menu.hidden = false
    //         } else {
    //             location.href = '#login'
    //         }
    //         break
    //     case '#all':
    //         if (currentUser) {
    //             all.hidden = false
    //             menu.hidden = false
    //             showAllNotes()
    //         } else {
    //             location.href = '#login'
    //         }
    //         break
    //     case '#logout':
    //         currentUser = null
    //         localStorage.removeItem('currentUser')
    //         location.href = '#login'
    //         break
    //     default:
    //         login.hidden = false
    // }
}


window.addEventListener('hashchange', locationChanged)
// locationChanged()







// появление надписи по буквам
function typeText (){
    let type = document.querySelector('.type')
    let text = type.innerHTML
    let out = ''
    let i = 0
    function typeLine (){
        let interval = setTimeout (function(){
            out += text[i]
            type.innerHTML = out
            i++
            if (i >= text.length) {
                clearTimeout (interval)
                return true
            }
            typeLine()
        }, 90)
    }
    typeLine()
}
typeText()
