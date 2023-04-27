const translateImage = (position) => {
    const imageHolder = document.querySelector('.image-holder')
    imageHolder.style.transform = `translate(${position})`
    imageHolder.style.transition = 'all 1s'
}

const translateNumber = (number) => {
    switch (number){
    case "0":
        return number = 'one'
    case "1":
        return number = 'two'
    case "2":
        return number = 'three'
    case "3":
        return number = 'four'
    case "4":
        return number = 'five'
    case "5":
        return number = 'six'
    }
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
            const position = translateNumber(btn.dataset.position)
            translateImage(`-${translateAmount}vw`, position)
        })
    }
};

const arrowButtons = () => {
    const leftArrow = document.querySelector('.left-arrow')    
    const rightArrow = document.querySelector('.right-arrow')

    leftArrow.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(currentPosition)
        if (currentPosition === 0 || currentPosition === '0') {
            currentPosition = 6
        }
        currentPosition = currentPosition - 1
        const translateAmount = 50 * currentPosition
        const position = translateNumber(currentPosition)
        translateImage(`-${translateAmount}vw`, position)
    })

    rightArrow.addEventListener('click', (e) => {
        e.preventDefault()
        if (currentPosition === 5 || currentPosition === '5') {
            currentPosition = 0
        }
        currentPosition++
        const translateAmount = 50 * currentPosition
        const position = translateNumber(currentPosition)
        translateImage(`-${translateAmount}vw`, position)
})
};

createButtons()
arrowButtons();