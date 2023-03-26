document.querySelector("button").addEventListener("click", doggyFacts)

function doggyFacts() {
    let choice = Number(document.querySelector("input").value)
    const url = `https://dog-api.kinduff.com/api/facts?number=${choice}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.facts)
            document.querySelector("p").innerText = data.facts
        })
        .catch(err => {
            console.log(`Error ${err}`)
        })
}