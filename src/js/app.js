function criptografar_Mensagem() {
    const mensagem = document.getElementById("texto").value;

    const mensagemCriptografada = mensagem.replace(/[aeiou]/gi, function (match) {
        switch (match.toLowerCase()) {
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufat";
            default:
                return match;
        }
    });

    document.getElementById("texto2").value = mensagemCriptografada;
    document.getElementById("criptografar");
    limpar_Textarea();
}

function descriptografar_Mensagem() {
    const mensagem = document.getElementById("texto").value;

    const mensagemDescriptografada = mensagem.replace(/ai|enter|imes|ober|ufat/gi, function (match) {
        switch (match.toLowerCase()) {
            case "ai":
                return "a";
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ober":
                return "o";
            case "ufat":
                return "u";
            default:
                return match;
        }
    });

    document.getElementById("texto2").value = mensagemDescriptografada;
    document.getElementById("descriptografar");
    limpar_Textarea();
}

function limpar_Textarea() {
    document.getElementById('texto').value = '';
}

document.getElementById('msg_Copiar').addEventListener('click', msg_Copiar);

function msg_Copiar() {
  document.getElementById("texto2").select();
  document.execCommand("copy");
}