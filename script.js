  // Open chat popup
  document.getElementById('chatBtn').addEventListener('click', function() {
    document.getElementById('chatPopup').style.display = 'block';
  });
  
  // Close chat popup
  document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatPopup').style.display = 'none';
  });
  
  // Sending messages
  document.getElementById('sendBtn').addEventListener('click', function() {
    sendMessage();
  });
  
  // Send on Enter key
  document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // Send Message Function
  function sendMessage() {
    let input = document.getElementById('userInput');
    let text = input.value.trim();
    if (text) {
      let message = document.createElement('div');
      message.className = 'message user';
      message.innerText = text;
      document.getElementById('chatBody').appendChild(message);
      input.value = '';
      document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
    }
  }