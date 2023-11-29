const numbers = document.querySelectorAll("p")
const button = document.querySelector("button")


const getRandomInt = (start, end) => {
    min = Math.ceil(start);
    max = Math.floor(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.onclick = () => {
    numbers.forEach(number => {
        const randomNumber = getRandomInt(1, 100)
        if (randomNumber < 10) {
            number.innerText = "0" + randomNumber
        } else {
            number.innerText = randomNumber
        }
    })
}
