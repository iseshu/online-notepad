function domain() {
    const data = localStorage.getItem('data');
    if (data) {
        document.getElementById('text').value = data;
    }
    else {
        document.getElementById('text').value = "Hello this a simple Note Pad website which used to store your notes in your browser.";
    }
}

function dotast() {
    const data = document.getElementById('text').value;
    if (data) {
        localStorage.setItem('data',data);
    }
    else {
        localStorage.removeItem('data');
    }

}