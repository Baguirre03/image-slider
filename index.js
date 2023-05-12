const translateImage = (amount) => {
    const imageHolder = document.querySelector('.image-holder')
    imageHolder.style.transform = `translate(${amount})`
    imageHolder.style.transition = 'all 1s'
}

let currentPosition = 0

const createButtons = () => {
    const parentDiv = document.querySelector('.buttons')

    const btnHolder = document.createElement('div')
    btnHolder.classList.add('btn-holder')
    parentDiv.appendChild(btnHolder)

    const allImages = document.querySelectorAll('.photo')
    for (i = 0; i < allImages.length; i++) {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.dataset.position = i
        btnHolder.appendChild(btn)

        btn.addEventListener('click', (e) => {
            e.preventDefault()
            currentPosition = btn.dataset.position
            const translateAmount = 50 * btn.dataset.position
            translateImage(`-${translateAmount}vw`)
        })
    }
};

const leftArrowEvent = () => {
    if (currentPosition === 0 || currentPosition === '0') {
        currentPosition = 6
    }
    currentPosition--
    const translateAmount = 50 * currentPosition
    translateImage(`-${translateAmount}vw`)
}
const rightArrowEvent = () => {
    if (currentPosition === 5 || currentPosition === '5') {
        currentPosition = 0
    }
    currentPosition++
    const translateAmount = 50 * currentPosition
    translateImage(`-${translateAmount}vw`)
}

const arrowButtons = () => {
    const leftArrow = document.querySelector('.left-arrow')    
    const rightArrow = document.querySelector('.right-arrow')

    leftArrow.addEventListener('click', (e) => {
        e.preventDefault()
        leftArrowEvent();
    })

    rightArrow.addEventListener('click', (e) => {
        e.preventDefault()
        rightArrowEvent();
    })
};

window.onload = function() {
    let time = setInterval(rightArrowEvent, 3000)
    document.onmousemove = function(){
        clearInterval(time)
        time = setInterval(rightArrowEvent, 3000)
        return time
    }
}

createButtons()
arrowButtons();
