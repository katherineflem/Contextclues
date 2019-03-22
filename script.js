$(document).ready(function () {
    var friends = ["George", "Rachel", "Hayley", "Emily", "Morgan"]
    var locations = ["Jail", "Doghouse", "Outhouse", "Backyard", "NOLA", "Basement", "Trader Joes", "toilet", "Mississippi", "lake"]
    var weapons = ["knife", "dirt", "gun", "hose", "dog food", "fork", "power drill", "cat", "hammer", "car", "shoe", "banana", "cinnamon toast crunch", "dirty laundry", "fruity pebbles", "wine bottle", "beer bottle", "cardstock", "butter knife", "toaster"]
    for (var i = 1; i < 101; i++) { //loop to display 100 Accusations on the page where i is each accusation 1-100
        var heading3 = $("<h3>Accusation " +  i  + " </h3> ");//heading holding each accusation
        heading3.appendTo("body");
        makeAccusation(); //calling the whole function that has the alert function nested within it and the click event 

        function makeAccusation() { //have to make sure each array can feed into the loop
            var friendName = friends[i % 5]; // the amount of index positions in each array is smaller than how long the loop runs so you have to make the index positions reiterate using remainders of the length of the array
            var locationName = locations[i % 10];
            var weaponsName = weapons[i % 20];

            function alertAccusation() { //create an alert for each accusation
                alert("Accusation " + i + " : I accuse " + friendName + " with the " + weaponsName + " in the " + locationName + " ! ")
            }
            return heading3.click(alertAccusation) //return the click event that takes in the alert function
        }
    }
})