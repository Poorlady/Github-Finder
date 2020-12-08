class UI {
    constructor() {
        this.profileElement = document.getElementById("profile");
    }

    displayProfile(userData) {
        this.profileElement.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${userData.avatar_url}">
                        <a href="${userData.html_url}" target="_blank" class="btn
                        btn-primary btn-block mb-3">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${userData.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${userData.public_gists}</span>
                        <span class="badge badge-success">Followers: ${userData.followers}</span>
                        <span class="badge badge-info">Following: ${userData.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${userData.company}</li>
                            <li class="list-group-item">Website/Blog: ${userData.blog}</li>
                            <li class="list-group-item">Location: ${userData.location}</li>
                            <li class="list-group-item">Member Since: ${userData.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest repos</h3>
            <div id="repos"></div>
        `
    }

    clearProfile() {
        this.profileElement.innerHTML = ""
    }

    createAlert(message, className) {
        // Destroy the existing alert
        this.removeAlert()
        // Create div element
        const alert = document.createElement("div");
        // Add class to the element
        alert.className = className;
        // Add message to the element
        alert.appendChild(document.createTextNode(message));
        // Get the parent Element of the profile
        const parentElement = document.querySelector(".searchContainer");
        // Get the first child of the parent Element
        const firstChild = document.querySelector(".search");
        // Append before
        parentElement.insertBefore(alert, firstChild);
        // Destroy this alert in 3s
        setTimeout(() => {
            this.removeAlert()
        }, 3000)
    }

    removeAlert() {
        // Get the alert element
        const alert = document.querySelector(".alert");
        // check if alert is exist
        if (alert) {
            alert.remove();
        }
    }

    displayRepos(repos) {
        let output = "";

        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        })

        document.getElementById("repos").innerHTML = output;
    }
}