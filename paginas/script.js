document.addEventListener('DOMContentLoaded', () => {
  const messagesDiv = document.getElementById('messages');
  const messages = JSON.parse(messagesDiv.getAttribute('data-messages') || '[]');
  renderMessages(messages)
});

function sendMessage() {
  const userSelect = document.getElementById('userSelect');
  const messageInput = document.getElementById('messageInput');
  const messages = document.getElementById('messages');

  const selectedUser = userSelect.options[userSelect.selectedIndex].text;
  const message = messageInput.value;

  if (message.trim() !== '') {
      const data = new Date();
      const dataFormatada = `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`;

      const newMessage = document.createElement('div');
      newMessage.classList.add('message');
      newMessage.innerHTML = `<strong>${selectedUser}:</strong> ${message}
                              <div class="dataHora">mensagem enviada em:${dataFormatada}</div>`

      messages.appendChild(newMessage);
      messages.scrollTop = messages.scrollHeight;
      messageInput.value = '';
  }
};

function renderMessages(messages) {
  const messagesContainer = document.getElementById('messages');
  messagesContainer.innerHTML = ''; // Limpar as mensagens atuais
  
  messages.forEach(message => {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    // Aqui você deve ajustar para exibir corretamente as mensagens na interface
    newMessage.innerHTML = `<strong>${message.user}:</strong> ${message.text}
                            <div class="dataHora">postado em:${message.timestamp}</div>`;
    messagesContainer.appendChild(newMessage);
  });
};