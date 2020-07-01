const paragraphElement = document.querySelector('#word-translate-result')

const render = (string, p = paragraphElement) => {
    return p.innerHTML = `${string}`
}