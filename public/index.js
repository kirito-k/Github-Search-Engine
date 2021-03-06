// Create Github instance
const github = new Github();

// Create UserInterface instance
const ui = new Ui();

// Hide alert message div tag initially
document.querySelector(".alert").style.display = "none";

// Username input field
let user_field = document.querySelector("#user-field");
// Detect user keydown event
user_field.addEventListener("keyup", (e) => {
  let username = e.target.value;

  // Check if username is non-empty
  if (username != "") {
    // Get user profiles and repos
    let userData = github.getUserProfile(username);

    userData.then((data) => {
      if (data.userData.message == "Not Found") {
        // Show error User does not exist
        console.log("User not found");
        ui.userNotFoundAlert();
      } else {
        ui.showProfile(data.userData);
        ui.showRepos(data.userRepo);
      }
    });
  } else {
    ui.clearProfile();
  }
});
