class Github {
    constructor() {
        this.client_id = "";
        this.client_key = "";
        this.repo_count = 5;
        this.repo_sort = "created: asc"
    }

    async fetchUser(user) {
        const userData = await fetch(`
        https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)

        const repoData = await fetch(`
        https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)

        const userProfile = await userData.json();
        const reposProfile = await repoData.json();

        return {
            userProfile,
            reposProfile
        }
    }
}