class Ui {
  // UI methods to manipulate frontend display
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  // Display user profile
  showProfile(userData) {
    this.profile.innerHTML = `
        <div class="card card-body mt-2">
        <div class="row">
          <div class="col-md-4">
            <img class="img-fluid" src="${userData.avatar_url}" alt="">
          </div>
          <div class="col-md-8">
            <button type="button" class="btn btn-sm btn-primary mt-2">Public Repos: ${userData.public_repos}</button>
            <button type="button" class="btn btn-sm btn-dark mt-2">Public Gists: ${userData.public_gists}</button>
            <button type="button" class="btn btn-sm btn-warning mt-2">Followers: ${userData.followers}</button>
            <button type="button" class="btn btn-sm btn-success mt-2">Following: ${userData.following}</button>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${userData.name}</li>
              <li class="list-group-item">Location: ${userData.location}</li>
              <li class="list-group-item">Website/Blog: ${userData.blog}</li>
            </ul>
            <button type="button" class="btn btn-lg btn-outline-primary ml-3"><a href="${userData.html_url}">Go to Profile</a></button>
          </div>
        </div>
      </div>
        `;
  }

  showRepos(userRepo) {
    console.log(userRepo);
  }

  // Clear results if search bar is empty
  clearProfile() {
    this.profile.innerHTML = "";
  }

  // Show alert if username doesn't exist in GitHub
  userNotFoundAlert() {
    let alert_box = document.querySelector(".alert");
    alert_box.style.display = "block";
    setTimeout(() => {
      alert_box.style.display = "none";
    }, 2000);
  }
}
