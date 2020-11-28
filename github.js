class Github {
  constructor() {
    let config;
    fetch("config.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.client_id = data.client_id;
        this.client_secret = data.client_secret;
      });

    this.repo_count = 5;
    this.order = "created";
  }

  async getUserProfile(user) {
    let profile_url = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;

    let repo_url = `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.order}&client_id=${this.client_id}&client_secret=${this.client_secret}`;

    let response1 = await fetch(profile_url);
    let userData = await response1.json();

    let response2 = await fetch(repo_url);
    let userRepo = await response2.json();

    return {
      userData: userData,
      userRepo: userRepo,
    };
  }
}
