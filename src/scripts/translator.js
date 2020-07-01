const stringEl = document.querySelector('#string-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        translateWord()
    }
})

const translateWord = () => {
    let string = document.querySelector('#string-input').value
    string = string.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let index = 0
    if (vowels.includes(string[0])) {
        string += 'way'
        render(string)
    } else {
        for (let c of string) {
            if (vowels.includes(c)) {
                index = string.indexOf(c)
                break
            }
        }
        string = string.slice(index) + string.slice(0, index) + 'ay'
        render(string)
    }
}