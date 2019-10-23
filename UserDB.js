class User {
    constructor(username, password, name, phone, city, zip, address, email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.email = email;
    }
}
// for database: check if user exists in localstorage otherwise create user and push to list
if (localStorage.getItem("user") == null) {
    let userList = []; // den vil automatisk tage informationen i rækkefølgen som ovenfor
        userList.push(new User ("hello","1234567", "Emma Marie Dalgaard Laursen", "+45 22 41 90 32", "Frederiksberg C", "1954", "Hostrups Have 30, 4tv", "emma.laursen.97@hotmail.com"));
        userList.push(new User ("gnu","afdanket", "Alexander Hellowell", "+45 20 61 38 44", "Dubai", "1234", "Al Barsha 2", "Alexander123@hgmail.com"));
        userList.push(new User ("philipino","lugter", "Philip Martini Ravn Jørgensen", "+45 30 27 44 93", "Jyllinge", "4040", "Korskildevej 12", "joergensen.philip@gmail.com"));


        // if created save to userList in local storage, stringify it first.
        var userListString = JSON.stringify(userList);
        localStorage.setItem("User", userListString)

}       //if user is existing in database
    else {
        let userList = JSON.parse(localStorage.getItem("User"))
}


