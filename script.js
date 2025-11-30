function getQuote() {

    document.getElementById("quote").innerText = "Loading...";

    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {
            document.getElementById("quote").innerText = data.content;
            document.getElementById("author").innerText = data.author;
        })
        .catch(() => {
            document.getElementById("quote").innerText = "Error";
        });
}
