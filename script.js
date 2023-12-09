document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const userDataDiv = document.getElementById('userData');
  
    userForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
  
      // Create user object
      const userDetails = {
        name: name,
        email: email,
        phone: phone
      };
  
      // Check if localStorage already has user details
      const storedUsers = localStorage.getItem('users');
      const usersArray = storedUsers ? JSON.parse(storedUsers) : [];
  
      // Add new user details to the array
      usersArray.push(userDetails);
  
      // Save updated array to localStorage
      localStorage.setItem('users', JSON.stringify(usersArray));
  
      // Display user data in the browser
      userDataDiv.innerHTML += `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><hr>`;
  
      // Reset form fields
      userForm.reset();
    });
  
    // Display existing user data from localStorage on page load
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const usersArray = JSON.parse(storedUsers);
      usersArray.forEach(user => {
        userDataDiv.innerHTML += `<p>Name: ${user.name}</p><p>Email: ${user.email}</p><p>Phone: ${user.phone}</p><hr>`;
      });
    }
  });
  