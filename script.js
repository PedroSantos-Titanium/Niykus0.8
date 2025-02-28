// Função para retornar ao início (clique na logo)
function returnToHome() {
    window.location.href = "#";
  }
  // Mensagens fofas que vão aparecer no avatar
const messages = [
    "Oi momo, espero que esteja gostando do seu presentinho",
    "Eu amo muito você viu?",
    "Não esqueça de tomar uma aguinha",
    "Depois me conta o que achou",
    "Você me faz muito feliz, querida",
    "Você é incrivel amor",
  ];
  
  let currentMessageIndex = 0;
  
  const messageElement = document.querySelector('.message-text');
  
  // Função para trocar a mensagem
  function changeMessage() {
    messageElement.textContent = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
  }
  
  // Troca de mensagem a cada 5 segundos
  setInterval(changeMessage, 5000);
  
  // Inicializa com a primeira mensagem
  changeMessage();
  