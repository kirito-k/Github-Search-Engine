// Performs all Github fetch operations
class Github {
  constructor() {
    fetch("config.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.headers = {
          "Authorization": `Token ${data.token}`
        }
      });

    this.repo_count = 5;
    this.order = "created: asc ";
  }

  async getUserProfile(user) {
    // Get user profile info
    let profile_url = `https://api.github.com/users/${user}`;
    let userData = await fetch(profile_url, {"method": "GET", headers: this.headers})
                      .then(res => res.json())
                      .catch(err => console.log("something1"));
    
    // Get user repositories
    let repo_url = `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.order}`;
    let userRepo = await fetch(repo_url, {"method": "GET", headers: this.headers})
                      .then(res => res.json())
                      .catch(err => console.log("something2"))

    return {
      userData: userData,
      userRepo: userRepo,
    };
  }
}
