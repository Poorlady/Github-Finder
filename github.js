class Github {
    constructor() {
        this.client_id = "adae055207c5f876bec3";
        this.client_key = "fc80acd046fd59237d5ee586e2b0162d1c761e3b";
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