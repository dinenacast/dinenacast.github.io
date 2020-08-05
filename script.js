function alertTw() {
    window.open('https://www.twitch.tv/dinenacast')
}

function alertYt() {
    window.open('https://www.youtube.com/channel/UCPkZrRC-CiMrlo-JaciefBg')
}

function enviarFeedback() {
    var nome = document.getElementById('nome').value
    var feedbackText = document.getElementById('feedbackText').value

    var thankFeedback = document.getElementById('thankFeedback')
    var thankFeedbackName = document.getElementById('thankFeedbackName')

    var feedbackBoxTitleFeedback = document.getElementById('feedbackBoxTitleFeedback')
    var feedbackBoxTitleFeedbackH1 = document.getElementById('feedbackBoxTitleFeedbackH1')

    var enviarFeedbackBtn = document.getElementById('enviarFeedbackBtn')

    thankFeedback.hidden = false;
    feedbackBoxTitleFeedback.hidden = true;
    feedbackBoxTitleFeedbackH1.hidden = true;
    thankFeedbackName.hidden = false;
    enviarFeedbackBtn.hidden = true;

    thankFeedbackName.innerHTML = ` ${nome}`

    console.log(`${nome} disse: ${feedbackText}`)

    var feedbackInfo = {
        nome: nome,
        texto: feedbackText
    }

    var fetchConfig = {
        headers: {'Content-Type': 'application/json'},
        method: 'post',
        body: JSON.stringify(fetchConfig)
    }

    fetch('https://dinenacastapi.herokuapp.com/feedback', fetchConfig)
    .then(res => res.json())
    .then(retorno => {
        console.log(retorno)
    })
}