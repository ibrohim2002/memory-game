const cards = []
const main = document.querySelector(".main")
var length = 20;

function display() {
    let arr = []
    let array = []
    while (arr.length < length) {
        let random = Math.ceil(Math.random() * 10)
        let result = arr.indexOf(random)
        if (result == -1) {
            arr.push(random)
            arr.push(random)
        }
    }
    for (let j = 0; j < length; j++) {
        let random1 = random(0, arr.length)
        array.push(arr[random1])
        arr.splice(random1, 1)
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    main.innerHTML = ""
    for (let a = 0; a < length; a++) {
        let label = document.createElement("div")
        label.innerHTML = `
        <div class="card">
            <div class="card__inner card-inner${a}" onclick="e(${a})">
                <div class="card__face front">
                    <img src="assets/ucl.png">
                </div>
                <div class="card__face back">
                    <img class="img" src="assets/${array[a]}.png">
                    </div>
                </div>
            </div>
        </div>
        `
        main.append(label)

        if (length == 4) {
            main.style.width = "250px"
        } else if (length == 6) {
            main.style.width = "400px"
        } else if (length == 12) {
            main.style.width = "500px"
        } else if (length == 16) {
            main.style.width = "500px"
        } else if (length == 20) {
            main.style.width = "600px"
        }
    }
}
display();

let check_arr = []
let cursors = []

function e(x) {
    const card = document.querySelector(`.card-inner${x}`)
    card.style.pointerEvents = "none"
    const img = document.querySelector(`.card-inner${x} .img`).src
    card.classList.add('is-flipped');
    check_arr.unshift(card)
    check_arr.unshift(img)
    if (check_arr.length % 4 == 0) {
        for (let n = 0; n < length; n++) {
            const cursor = document.querySelector(`.card-inner${n}`)
            cursor.style.pointerEvents = "none"
        }
        if (check_arr[0] != check_arr[2]) {
            const timeout = setTimeout(check, 500);
        } else {
            for (let n = 0; n < length; n++) {
                const cursor = document.querySelector(`.card-inner${n}`)
                let result = cursors.indexOf(cursor)
                if (result == -1) {
                    cursor.style.pointerEvents = "auto"
                } else {
                    cursor.style.pointerEvents = "none"
                }
            }
            check_arr[1].style.pointerEvents = "none"
            check_arr[3].style.pointerEvents = "none"
            cursors.unshift(check_arr[1])
            cursors.unshift(check_arr[3])
        }
    }
}

function check() {
    check_arr[1].classList.remove('is-flipped')
    check_arr[3].classList.remove('is-flipped')
    for (let n = 0; n < length; n++) {
        const cursor = document.querySelector(`.card-inner${n}`)
        let result = cursors.indexOf(cursor)
        if (result == -1) {
            cursor.style.pointerEvents = "auto"
        } else {
            cursor.style.pointerEvents = "none"
        }
    }
}