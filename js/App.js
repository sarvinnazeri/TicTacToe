const spans = document.querySelectorAll('span');

// double play
const btn = document.querySelectorAll('button')
btn[0].addEventListener('click', () => {
    btn[0].setAttribute('inert', 'true')
    btn[1].setAttribute('inert', 'true')
    let random = '';
    const x = [];
    const y = [];
    spans.forEach((val, i) => {
        val.addEventListener('click', () => {
            val.innerHTML = 'x';
            val.style.color = 'rgb(246,116,48)'
            val.setAttribute('inert', 'true');
            x.push(i);
            console.log(x);
            checkWinner();

            do {
                random = Math.floor(Math.random() * 9);
            } while (x.includes(random) || y.includes(random));

            spans[random].innerHTML = 'o';
            spans[random].style.color = 'rgb(190,215,88)';
            spans[random].setAttribute('inert', 'true');
            y.push(random);
            console.log(y);

        });
    });

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        winPatterns.forEach(pattern => {
            const [a, b, c] = pattern;
            if (spans[a].innerText && spans[a].innerText === spans[b].innerText && spans[a].innerText === spans[c].innerText) {
                alert(`Player ${spans[a].innerText} wins!`);
                location.reload()

            }
        });
    }

})

// single play
btn[1].addEventListener('click', () => {
    btn[1].setAttribute('inert', 'true')
    btn[0].setAttribute('inert', 'true')
    let q = [];
    let j = [];
    let flag = 0;

    spans.forEach((val, i) => {
        val.addEventListener('click', () => {
            if (flag % 2 == 0) {
                val.innerText = 'x';
                val.style.color = 'rgb(246,116,48)'
                val.setAttribute('inert', 'true');
                q.push(i);
                console.log(q);
            } else {
                val.innerText = 'o';
                val.style.color = 'rgb(190,215,88)'
                val.setAttribute('inert', 'true');
                j.push(i);
                console.log(j);
            }
            flag++;

            checkWinner();
        });
    });

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        winPatterns.forEach(pattern => {
            const [a, b, c] = pattern;
            if (spans[a].innerText && spans[a].innerText === spans[b].innerText && spans[a].innerText === spans[c].innerText) {
                alert(`Player ${spans[a].innerText} wins!`);
                location.reload()
            }
        });
    }


})
btn[2].addEventListener('click', () => {
    location.reload()
})

