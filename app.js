// instanciate class
const github = new Github;
const ui = new UI;

// get the search input element
const searchInput = document.getElementById("searchUser");
// add eventlistener to it
searchInput.addEventListener("keyup", (e) => {
    const user = e.target.value;
    if (user !== "") {
        // fetch user form API
        github.fetchUser(user)
            .then(data => {
                // Check if the user is found
                if (data.userProfile.message !== "Not Found") {
                    // display the ui
                    ui.displayProfile(data.userProfile);
                    ui.displayRepos(data.reposProfile);
                } else {
                    // Create alert
                    ui.createAlert(data.userProfile.message, "alert alert-danger mt-2");
                }
            })
            .catch(err => console.log(err))
    } else {
        // Clear the profile elements
        ui.clearProfile()
    }
})