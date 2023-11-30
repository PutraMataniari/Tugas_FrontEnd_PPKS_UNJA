function sendMessage() {
    var userInput = document.getElementById("user-input");
    var messageContainer = document.getElementById("chat-log");
    
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = userInput.value;
    messageContainer.appendChild(userMessage);
    
    // Proses pesan dari pengguna
    processUserMessage(userInput.value);

    userInput.value = "";
}

function processUserMessage(message) {
    var messageContainer = document.getElementById("chat-log");
    
    var botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.textContent = getBotResponse(message);
    messageContainer.appendChild(botMessage);
}

function getBotResponse(message) {
    // Mengatur tanggapan bot berdasarkan pesan yang diterima
    // Ganti kode berikut dengan logika bot sesuai kebutuhan Anda
    if (message.toLowerCase().includes("hai")) {
        return "Halo, apa yang bisa saya bantu?";
    } else if (message.toLowerCase().includes("selamat pagi")) {
        return "Selamat pagi! Ada yang bisa saya bantu?";
    } else {
        return "Maaf, saya tidak mengerti. Bisa Anda jelaskan lebih lanjut?";
    }
}
function close(){
    chat.style.Display = "none";
}


chatwa.addEventListener("click", myFunction);
let n = 0;
function myFunction(e) {
    n += 1;
    if(n % 2 == 1){
        box.style.display = "block";
    }else{
        box.style.display = "none";
    }
}