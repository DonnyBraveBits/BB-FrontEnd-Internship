const formReset = document.querySelector('.form-reset')
const formLogin = document.querySelector('.form-login')
const forgot = document.querySelector('.login-forgot')
const cancel = document.querySelector('.reset-cancel')

forgot.addEventListener('click', () => {
    formReset.classList.toggle('hidden')
    formLogin.classList.toggle('hidden')
})

cancel.addEventListener('click', () => {
    formReset.classList.toggle('hidden')
    formLogin.classList.toggle('hidden')
})



