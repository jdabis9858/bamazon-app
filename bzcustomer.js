var mysql = require("mysql")
var inq = require("inquirer")
require("console.table")

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "lambo127",
    database: "bz_DB"

});


connection.connect(function (err) {
    if (err) throw err;
    displayInv();
});

function displayInv() {
    connection.query("SELECT * FROM items", function (err, response) {
        // for (var i = 0; i < response.length; i++) {
            // console.table(response[i].item_id + " | " + response[i].product + " | " + response[i].price)
            console.table(response)
    
    
        // }
        inq.prompt([{
            name: "itemId",
            type: "input",
            message: "What product would you like to buy? Enter id."

        },

        {
            name: "stock",
            type: "input",
            message: "How much would you like to buy"
        }


        ])
            .then(function (answer) {
                console.log(answer)
                for (var i = 0; i < 10; i++)

                var itemId = answer.item_id
                var stock1 = parseInt(answer.stock)
                connection.query("ALTER TABLE items", function(err, response) {
                    if (itemId === i) {
                        //im not sure how to finish this code but its supposed to
                        //modify the database based on how many itemes you buy.
                    }
                }
            })
        }


}


