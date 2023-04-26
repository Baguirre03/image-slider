const translateImage = (position, imageNumber) => {
    const imageHolder = document.querySelector('.image-holder')
    const image = document.querySelector(`.image-${imageNumber}`)
    image.classList.add('visible-image')

    const positionInImageHolder = position
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
            const translateAmount = 50 * btn.dataset.position
            const position = translateNumber(btn.dataset.position)
            translateImage(`-${translateAmount}vw`, position)
        })
    }
};

createButtons()