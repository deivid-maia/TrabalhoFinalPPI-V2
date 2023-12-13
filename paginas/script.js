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
                              <div class="dataHora">enviada em: ${dataFormatada}</div>`

      messages.appendChild(newMessage);
      messages.scrollTop = messages.scrollHeight;
      messageInput.value = '';
  }
}