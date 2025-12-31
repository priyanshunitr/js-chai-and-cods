{
    function SetUsername(username) {
        //complex DB calls
        this.username = username
        console.log("called with .call()");
    }

    function createUser(username, email, password) {
        SetUsername.call(this, username)

        this.email = email
        this.password = password
    }

    const chai = new createUser("chai", "chai@fb.com", "123")
    console.log(chai);
}

// apply method
{
    function SetUsername(username) {
        //complex DB calls
        this.username = username
        console.log("called with .apply()");
    }

    function createUser(username, email, password) {
        SetUsername.apply(this, [username])

        this.email = email
        this.password = password
    }

    const chai = new createUser("chai", "chai@fb.com", "123")
    console.log(chai);
}