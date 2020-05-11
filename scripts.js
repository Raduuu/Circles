function randomRgbString() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

document.getElementById('input').addEventListener('change', (ev) => {
    const numberOfCircles = ev.target.value
    for (let i = 0; i < numberOfCircles; i++) {
        let circle = document.createElement('div')
        let leftDirection = 1
        let topDirection = 1
        const diameter = Math.random() * 100
        circle.style.borderRadius = '50%'
        circle.style.height = diameter + 'px'
        circle.style.width = diameter + 'px'
        circle.style.border = `1px solid ${randomRgbString()}`
        circle.style.left = parseInt(Math.random() * (500 - diameter * 2) + diameter) + 'px'
        circle.style.top = parseInt(Math.random() * (500 - diameter * 2) + diameter) + 'px'
        circle.style.position = 'absolute'
        document.getElementById('container').append(circle)

        setInterval(() => {
            // random speed
            let speed = parseInt(Math.random() * 10)

            // positions of circles
            let leftPos = parseInt(circle.style.left)
            let topPos = parseInt(circle.style.top)

            // changing circles direction if they hit margins
            if (leftPos + diameter > 500) {
                leftDirection = -1
            } else if (leftPos < 0) {
                leftDirection = 1
            }
            if (topPos + diameter > 500) {
                topDirection = -1
            } else if (topPos < 0) {
                topDirection = 1
            }

            // changing the left and top of circles
            circle.style.left = leftPos + speed * leftDirection + 'px'
            circle.style.top = topPos + speed * topDirection + 'px'
        }, 100)
    }
})
