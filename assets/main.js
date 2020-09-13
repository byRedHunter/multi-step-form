const $toPage2 = document.querySelector('#next-page-2')
const $toPage3 = document.querySelector('#next-page-3')

const $backPage1 = document.querySelector('#back-page-1')
const $backPage2 = document.querySelector('#back-page-2')

const $titles = document.querySelectorAll('.register-header-item h3')
const $marker = document.querySelectorAll('.register-header-item .point')

const moveForm = (valor) => {
	const $formRegister = document.querySelector('#form-register')
	$formRegister.style.transform = `translateX(${valor})`
}
const drawHeader = (item, type) => {
	if (type === 'add') {
		$titles[item].classList.add('active')
		$marker[item].classList.add('active')
	} else {
		$titles[item].classList.remove('active')
		$marker[item].classList.remove('active')
	}
}

$toPage2.addEventListener('click', () => {
	moveForm('-33.333333%')
	drawHeader(0, 'add')
})
$toPage3.addEventListener('click', () => {
	moveForm('-66.666666%')
	drawHeader(1, 'add')
})
document.querySelector('#sendData').addEventListener('click', (e) => {
	e.preventDefault()
	drawHeader(2, 'add')
})

$backPage1.addEventListener('click', () => {
	moveForm('0%')
	drawHeader(0, 'remove')
})
$backPage2.addEventListener('click', () => {
	moveForm('-33.333333%')
	drawHeader(1, 'remove')
	drawHeader(2, 'remove')
})

/* show and hide password */
const $eye = document.querySelector('#eye')
const $password = document.querySelector('#password')

$eye.addEventListener('click', () => {
	const type = $password.type

	if (type === 'password') {
		$eye.classList.remove('fa-eye')
		$eye.classList.add('fa-eye-slash')
		$password.type = 'text'
	} else {
		$eye.classList.remove('fa-eye-slash')
		$eye.classList.add('fa-eye')
		$password.type = 'password'
	}
})
