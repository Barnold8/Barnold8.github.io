function httpGet(theUrl) // cheers https://stackoverflow.com/questions/247483/http-get-request-in-javascript
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function gatherRepos(userName){
    return JSON.parse(httpGet("https://api.github.com/users/barnold8/repos"))
}


function reposToCards(repos){

    cards = []

    repos.forEach(repo => {
        cards.push(createCard(repo))
    });

    return cards
}

function createCard(repo){


    const aTag = document.createElement("a");
    aTag.href = repo["html_url"]

    const divCard = document.createElement("div")
    divCard.classList.add("card")

    title = createTitle("Project name: " + repo["name"]+"\n\n")
    contents = createContents("About: " + repo["description"])

    divCard.appendChild(title)
    divCard.appendChild(contents)
    aTag.appendChild(divCard)
    console.log(repo)

    return aTag


}

function createTitle(titleText){

    const title = document.createElement("h3")
    title.innerText = titleText

    return title
}

function createContents(contentText){

    const strong = document.createElement("strong")
    const content = document.createElement("p")
    strong.innerText = contentText
    content.appendChild(strong)


    return content
}


gridContainer = document.getElementsByClassName("grid-container")[0]

repos = gatherRepos("barnold8") // thank you github for having an API for this <3
cards = reposToCards(repos)

cards.forEach(card => {
    gridContainer.appendChild(card)
});
