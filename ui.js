// UI methods to manipulate frontend
class Ui {
  constructor() {
    this.profile = document.querySelector("#profile");
    this.repos = document.querySelector("#repos");
  }

  // Display user information part
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

  // Display user repositories part
  showRepos(userRepo) {
    let content = "<h2 class='m-2'>Latest Repos</h2>";
    userRepo.forEach((repo) => {
      content += `
        <div class="card card-body mb-2">
        <div class="row">
            <div class="col-md-4">
            <a href="${repo.html_url}">${repo.name}</a>
            </div>
            <div class="col-md-8 mr">
            <button type="button" class="btn btn-sm btn-primary">
                Stars: ${repo.stargazers_count}
            </button>
            <button type="button" class="btn btn-sm btn-dark">
                Forks: ${repo.forks_count}
            </button>
            <button type="button" class="btn btn-sm btn-warning">
                Language: ${repo.language}
            </button>
            </div>
        </div>
        </div>
      `;
    });
    this.repos.innerHTML = content;
  }

  // Clear results if search bar is empty
  clearProfile() {
    this.profile.innerHTML = "";
    this.repos.innerHTML = "";
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
