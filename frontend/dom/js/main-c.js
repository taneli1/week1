
let main = document.getElementsByTagName("main").item(0)
let article = document.createElement("article")

let header = document.createElement("header")
    header.innerHTML = `<h2>Article header</h2>`

let figure = document.createElement("figure")
    figure.innerHTML = `<img src="http://placekitten.com/320/160" alt="title">
                        <figcaption>Caption</figcaption>`

let p = document.createElement("p")
    p.textContent = "Here is some text. Here is some text. Here is some text. Here is some text."

article.appendChild(header)
article.appendChild(figure)
article.appendChild(p)

main.appendChild(article)


