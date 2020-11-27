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
  }

  async getUserProfile(user) {
    let url = `https://api.github.com/users/${user}?client_id=${this.client_id}+client_secret=${this.client_secret}`;

    let response = await fetch(url);
    let userData = await response.json();
    return userData;
  }
}
