var email = "monteiroelias783@gmail.com";

document.getElementById("copyButton").addEventListener("click", function() {
    var textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    window.alert("E-mail copiado: " + email);
});
