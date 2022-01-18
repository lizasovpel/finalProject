'use strict'
// локации
const login = document.querySelector('#login') 
const mainMenu = document.querySelector('#mainMenu') 
const desserts = document.querySelector('#desserts') 
const meat = document.querySelector('#meat') 
const salads = document.querySelector('#salads') 
const allRecipies = document.querySelectorAll('.reci') 
const myBook = document.querySelector('#myBook')
const mydesserts = document.querySelector('#mydesserts')
const mysalads = document.querySelector('#mysalads')
const mymeat = document.querySelector('#mymeat')

let locations = []
locations.push(login, mainMenu, myBook, desserts, meat, mysalads, mydesserts, mymeat, salads)
allRecipies.forEach(r => locations.push(r))
locations.forEach(location => location.hidden = true)

// кнопки и формы
const formLogin = document.querySelector('.formlogin') 
const loginInput = document.querySelector('#inputLogin') 
const registration = formLogin.querySelector('a')
const passwordInput = document.querySelector('#inputPassword') 
const wrongPass = document.querySelector('.wrongPass')
const account = document.querySelector('#account') 
const myRecipies = document.querySelector('#myRecipies')

let addRecipe = document.querySelectorAll('.addRecipe')
let deleteRecipe = document.querySelectorAll('.deleteRecipe')
addRecipe.forEach(el => el.addEventListener('click', addDelete))
deleteRecipe.forEach(el => el.addEventListener('click', addDelete))

let imgOk = document.querySelectorAll('.imgOk')
let imgEdit = document.querySelectorAll('.imgEdit')


// localstorage
let currentUser = localStorage.getItem('active')
let users = JSON.parse(localStorage.getItem('users')) || {}
let comments = JSON.parse(localStorage.getItem('comments')) || {}

// comments
const FormsComment = document.querySelectorAll('.addComment')

//регистрация и вход
registration.addEventListener('click', function(e){
    e.preventDefault()
    registration.innerHTML === 'Регистрация' ? registration.innerHTML = 'Вход' : registration.innerHTML = 'Регистрация'
    let submitButton = formLogin.querySelector('button')

    submitButton.innerHTML === 'Зарегистрироваться' ? submitButton.innerHTML = 'Войти' :submitButton.innerHTML = 'Зарегистрироваться'
    wrongPass.hidden = true



})

// вход в личный кабинет 
formLogin.addEventListener('submit', function (e) {
    e.preventDefault()
    currentUser = loginInput.value
    localStorage.setItem('active', loginInput.value)
    localStorage.setItem('users', loginInput.value)

    if (!loginInput.value || !passwordInput.value) {
        wrongPass.innerHTML = 'Необходимо ввести все данные пользователя'
        wrongPass.hidden = false
    } else {
        let submitButton = formLogin.querySelector('button')
        if(submitButton.innerHTML === 'Войти') {
            if(!users[currentUser]){
                wrongPass.innerHTML = 'Такого пользователя нет в базе.'
                wrongPass.hidden = false
            } else {
                if (users[currentUser].pass !== passwordInput.value){
                    passwordInput.value = ''
                    wrongPass.innerHTML = 'Пароль введен неверно. Повторите попытку.'
                    wrongPass.hidden = false
                } else {
                    location.hash = '#mainMenu'
                    registration.innerHTML = 'Регистрация'
                    submitButton.innerHTML = 'Войти'
                }
            }
        } else { 
            if(users[currentUser]) {
                wrongPass.innerHTML = 'Выбранное Вами имя пользователя уже занято.'
                wrongPass.hidden = false
            } else {
                users[currentUser] = {}
                users[currentUser].pass = passwordInput.value
                users[currentUser].desserts = []
                users[currentUser].salads = []
                users[currentUser].meat = []
                users[currentUser].recipies = []
                location.hash = '#mainMenu'
                registration.innerHTML = 'Регистрация'
                submitButton.innerHTML = 'Войти'
            }
    
        }
    
    }
    localStorage.setItem('users', JSON.stringify(users))
    myMenu()

})


//переход на другую страницу
function locationChanged() {
    locations.forEach(el => el.hidden = true)

    if (location.hash && location.hash !== '#login') {
        refreshComments ()
        deleteComment()
        menu()
        if(users[currentUser]) {
            document.querySelector(location.hash).hidden = false
            account.hidden = false
            myRecipies.hidden = false
            wrongPass.hidden = true
            doYouHaveThisOne()    
        } else {
            location.hash = '#login'
        }
    } else {
        loginInput.value = passwordInput.value = ''
        account.hidden = true
        myRecipies.hidden = true
        localStorage.removeItem('active')
        login.hidden = false
    }
    window.scrollTo(0, -Infinity)


}

// удаление и добавление нового блюда
function addDelete (e) {
    let Name = location.hash.slice(1)
    let type 
    Name.slice(0,5) === 'salad' ? type = 'salads' :
    Name.slice(0,7) === 'dessert' ? type = 'desserts' : type = 'meat'
    if(e.target.className === 'addRecipe') {
        users[currentUser][type].unshift(Name)
        users[currentUser].recipies.unshift(Name)
        e.target.hidden = true
        e.target.parentElement.querySelector('.deleteRecipe').hidden = false
        changeMy (type)
        myMenu()
    } else {
        let i = users[currentUser][type].indexOf(Name)
        let ind = users[currentUser].recipies.indexOf(Name)
        users[currentUser][type].splice(i, 1)
        users[currentUser].recipies.splice(ind, 1)
        e.target.hidden = true
        e.target.parentElement.querySelector('.addRecipe').hidden = false
        changeMy (type)
        myMenu()
    }
    localStorage.setItem('users', JSON.stringify(users))
}
//отрисовка разделов общего меню
function menu(){
    if (location.hash === '#desserts' || location.hash === '#meat' ||location.hash === '#salads'){
        let container = document.querySelector(`${location.hash} .menu-container`)
        container.innerHTML = ''
        let AllOfThese = document.querySelectorAll(`.reci[id^="${location.hash.slice(1, location.hash.length-1)}"]`)
        console.log(AllOfThese)

        AllOfThese.forEach(recipe => {
            let card = document.createElement('a')
            card.href = `#${recipe.id}`
            card.innerHTML = `<div class="card">
            <img src="images/${recipe.id}-main.jpg" alt="${recipe.id}">
            <h4>${recipe.querySelector('h1').innerHTML}</h4>
            </div>`
            container.append(card)
        })
    }
    
}
//отрисовка всего личного меню
function myMenu () {
    if (users[currentUser]){
        let cards = myBook.querySelectorAll('a')
        let images = []
        cards.forEach(card => {
            let image = card.querySelector('img')
            card.hidden = true
            images.push(image)
        })
        let data = [users[currentUser].desserts[0], users[currentUser].meat[0], users[currentUser].salads[0]]
        data.forEach(d => {
            let i = data.indexOf(d)
            if(d) {
                images[i].src = `images/${d}-main.jpg`
                cards[i].hidden = false
            }
        })
    }
}
myMenu()
 
// отрисовка разделов личного меню
function changeMy (a) {
    let my = document.querySelector(`#my${a} .menu-container`)
    my.innerHTML = ''
    
    if (users[currentUser][a][0]) {
        let current = users[currentUser][a]
        current.forEach(el => {
            let string = document.createElement('a')
            string.innerHTML = `
            <div class="card">
                <img src="images/${el}-main.jpg" alt="${el}">
                <h4>${document.querySelector(`#${el} h1`).innerHTML}</h4>
            </div>`
            string.href = `#${el}`
            my.append(string)
        })
    } 
}
if (users[currentUser]) {
    changeMy ('desserts')
    changeMy ('salads')
    changeMy ('meat')
}

//проверка или рецепт есть у пользователя (кнопка добавить/удалить)
function doYouHaveThisOne () {
    let recipeName = location.hash.slice(1)
    if (users[currentUser].recipies.indexOf(recipeName) === -1){
        addRecipe.forEach(el => el.hidden = false)
        deleteRecipe.forEach(el => el.hidden = true)    
    } 
    if (users[currentUser].recipies.indexOf(recipeName) !== -1) {
        addRecipe.forEach(el => el.hidden = true)
        deleteRecipe.forEach(el => el.hidden = false)    
    }
}

// добавление комментариев
FormsComment.forEach(form => {
    form.addEventListener('submit', function(e){
        e.preventDefault()
        let comment = form.querySelector('textarea')
        let newComment = `<div class="comment">
        <p>${currentUser}</p>
        <div class="commentText">
            <p>${comment.value}</p>
            <div class="redact">
                <img src="images/delete.png" class="imgDelete" alt="delete">
                <img src="images/edit.png" class="imgEdit" alt="edit">
                <img src="images/ok.png" class="imgOk" alt="ok" hidden>
            </div>
        </div>    
    </div>`
        if (!comments[location.hash]){
            comments[location.hash] = []
        }  
        comments[location.hash].unshift(newComment)
        comment.value = ''
        refreshComments ()
        deleteComment()

        localStorage.setItem('comments', JSON.stringify(comments))

    })
})

// вывод комментариев
function refreshComments (){
    let Inner = document.querySelector(`${location.hash}`).querySelector('.allComments')
    if (Inner) {
        Inner.innerHTML = []
        let prev = document.querySelector(`${location.hash} .previous`)

        if (comments[location.hash]) {
            comments[location.hash].forEach(comment => {
                let com = document.createElement('div')
                com.innerHTML = comment
                Inner.append(com)
                prev.hidden = false
            })
    
        } else {
            prev.hidden = true

        }
    }
    showComments ()
}
// удаление и изменение комментариев
function deleteComment(){
    let commentsContainer = document.querySelector(`${location.hash} .allComments`)
    if (commentsContainer) {
        commentsContainer.addEventListener('click', function(e){
            let targetComment = e.target.parentElement.parentElement.parentElement
    
            if(e.target.classList.contains('imgDelete')) {
                targetComment.parentElement.removeChild(targetComment)
     
            }
    
            if (e.target.classList.contains('imgEdit')){
                e.target.hidden = true
                e.target.parentElement.querySelector('.imgOk').hidden = false
                let targetString = e.target.parentElement.parentElement.querySelector('p')
                let text = targetString.innerHTML
                targetString.outerHTML = `<textarea name="EditComment" style="width:95%">${text}</textarea>`
            }
    
            if (e.target.classList.contains('imgOk')){
                e.target.parentElement.querySelector('.imgOk').hidden = true
                e.target.parentElement.querySelector('.imgEdit').hidden = false
                let targetString = e.target.parentElement.parentElement.querySelector('textarea')
                let text = targetString.value
                targetString.outerHTML = `<p>${text}</p>`
            }
            comments[location.hash] = []
            let AllComments = commentsContainer.querySelectorAll('.comment')
            AllComments.forEach(c => {
                c = c.outerHTML
                comments[location.hash].push(c)
            })
            localStorage.setItem('comments', JSON.stringify(comments))
        })
    
    }
}
// как показываются комментарии для конкретного пользователя
function showComments (){
    let DIV = document.querySelector(`${location.hash} .comments`)
    if(DIV){
        let Name = DIV.querySelector('form label')
        Name.innerHTML = currentUser
        let redactors = document.querySelectorAll('.redact')
        redactors.forEach(red => {
            red.hidden = true
            let n = red.parentElement.parentElement.querySelector('p').innerHTML
            if (n === currentUser) {
                red.hidden = false
            }
        })
    
    }

}

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


window.addEventListener('hashchange', locationChanged)
locationChanged()
