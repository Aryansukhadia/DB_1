// Function to open login popup
function openPopup() {
    document.getElementById('loginPopup').style.display = 'block';
  }
  
  // Function to close login popup
  function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
  }
  
  // Function to handle login with Google
  function loginWithGoogle() {
    // Add your Google login logic here
    console.log('Login with Google');
  }
  
  // Function to handle creating a new profile
  function createProfile() {
    // Add your profile creation logic here
    console.log('Create Profile');
  }
  
  // Event listener for login button click
  document.getElementById('loginBtn').addEventListener('click', openPopup);
  
  // Event listener for login form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now
    // Add your login logic here
    console.log('Login form submitted');
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    // Assume userType is fetched from the backend or database
    const userType = 'admin'; // Change this to actual user type
  
    // Function to redirect based on user type
    const redirectToPage = (userType) => {
      switch (userType) {
        case 'user':
          window.location.href = 'user_dashboard.html'; // Redirect to user dashboard page
          break;
        case 'admin':
          window.location.href = 'admin_dashboard.html'; // Redirect to admin dashboard page
          break;
        case 'agent':
          window.location.href = 'agent_dashboard.html'; // Redirect to agent dashboard page
          break;
        default:
          console.error('Invalid user type');
      }
    };
  
    // Redirect based on the userType
    redirectToPage(userType);
  });
  

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password from form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Dummy authentication logic (replace with actual backend logic)
    var usersDb = {
        'user1': {'username': 'user1', 'password': 'password', 'role': 'user'},
        'agent1': {'username': 'agent1', 'password': 'password', 'role': 'agent'},
        'owner1': {'username': 'owner1', 'password': 'password', 'role': 'owner'}
    };

    if (username in usersDb && usersDb[username]['password'] == password) {
        var role = usersDb[username]['role'];
        if (role == 'user') {
            window.location.href = '/user/dashboard';
        } else if (role == 'agent') {
            window.location.href = '/agent/dashboard';
        } else if (role == 'owner') {
            window.location.href = '/owner/dashboard';
        }
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid credentials. Please try again.';
    }
});
