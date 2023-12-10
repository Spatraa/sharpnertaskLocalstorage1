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
      renderUsers();
      
      // Reset form fields
      userForm.reset();
    });
  
    // Display existing user data from localStorage on page load
    renderUsers();
  
    function renderUsers() {
      userDataDiv.innerHTML = ''; // Clear previous data
  
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        const usersArray = JSON.parse(storedUsers);
        usersArray.forEach((user, index) => {
          const userItem = document.createElement('ul');
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          
          // Add event listener for delete button
          deleteButton.addEventListener('click', function() {
            // Remove user from array and update localStorage
            usersArray.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(usersArray));
            renderUsers(); // Re-render the updated user list
          });
  
          userItem.innerHTML = `<li>Name: ${user.name} | Email: ${user.email} | Phone: ${user.phone}</li>`;
          userItem.appendChild(deleteButton);
          userDataDiv.appendChild(userItem);
        });
      }
    }
  });
  