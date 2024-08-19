document.addEventListener('DOMContentLoaded', () => {
    // Job Listings
    const jobListings = [
        {
            title: 'Web Developer',
            company: 'ZAZ Web Development',
            location: 'Chennai'
        },
        {
            title: 'UI Designer',
            company: 'Dracrays Designing Company',
            location: 'Madurai'
        },
        {
            title: 'Front-end Developer',
            company: 'Blackfire Studio',
            location: 'Coimbatore'
        }
    ];

    const jobListContainer = document.getElementById('job-list-container');

    if (jobListContainer) {
        jobListings.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('job-listing');
            
            jobElement.innerHTML = `
                <h3>${job.title}</h3>
                <p>COMPANY: ${job.company}</p>
                <p>LOCATION: ${job.location}</p>
            `;
            
            jobListContainer.appendChild(jobElement);
        });
    }

    // Form Handling: Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const loginMessage = document.getElementById('login-message');

            // Simulate login logic (replace with real backend integration)
            if (email === 'user@example.com' && password === 'password123') {
                loginMessage.innerText = 'Login successful!';
                loginMessage.style.color = 'green';
                window.location.href = 'dashboard.html';
            } else {
                loginMessage.innerText = 'Invalid email or password.';
                loginMessage.style.color = 'red';
            }
        });
    }

    // Form Handling: Profile Update
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const profileMessage = document.getElementById('profile-message');
            profileMessage.innerText = 'Profile updated successfully!';
            profileMessage.style.color = 'green';
        });
    }

    // Form Handling: Registration
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const registerMessage = document.getElementById('register-message');
            registerMessage.innerText = 'Registration successful!';
            registerMessage.style.color = 'green';
            window.location.href = 'login.html';
        });
    }

    // Dashboard dynamic content
    const dashboardContent = document.getElementById('dashboard-content');
    if (dashboardContent) {
        // Injecting dynamic content
        dashboardContent.innerHTML = `
            <h3>Recent Job Applications</h3>
            <ul>
                <li>Application for Web Developer at ZAZ Web Development</li>
                <li>Application for UI Designer at Dracrays Designing Company</li>
            </ul>
        `;
    }

  document.querySelector('.menu-toggle').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    if (navList.style.display === 'none' || navList.style.display === '') {
      navList.style.display = 'block';
    } 
    else {
      navList.style.display = 'none';
    }
  });



    // Menu toggle for all screen sizes
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
});
