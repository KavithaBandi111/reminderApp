


document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

     if (username && password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("reminder-container").style.display = "block";
    } else {
        alert("Please enter a username and password");
    }
});


  

  document.getElementById('reminder-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    console.log(`Added reminder with name: ${name}, date: ${date}, time: ${time}`);
    const reminderList = document.getElementById('reminder-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${name} - ${date} ${time}</span><button onclick="completeReminder('${name}')">Complete</button><button onclick="deleteReminder('${name}')">Delete</button>`;
    reminderList.appendChild(listItem);
  });
  
  function completeReminder(name) {
    console.log(`Marked reminder "${name}" as completed`);
  }
  
  function deleteReminder(name) {
    console.log(`Deleted reminder "${name}"`);
  }
