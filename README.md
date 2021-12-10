#  **CPSC-362 - Pizza Radar**
## ***Professor : Marc Velasco***
## ***Project Summary*** -: 
* This project, **PizzaRadar** website , aims to be a program that would allow the user to share their location to find the nearest pizza restaurant/chain,
* Also give directions to the chosen location. It may also give ratings of those locations through yelp which, we are Integrating using the **Yelp API**. 

## ***Trello Link***

* https://trello.com/b/YzGfSVyM/362-project-pizzaradar

## **Website Link**

* https://pizzaradar.herokuapp.com/

### ***Team Members: Peter Van, Kenny Tran, Sam Le , Abhinav Arora.***

## ***Purpose***
* Considering pizza is one of the most popular foods in the United States, this project could not only make finding good local pizza places faster, but also provide a form of publicity to local chains that do not have the same advertising presence as larger chains.

## ***Iteration Milestone***

#### ***Iteration 5***

* In this Iteration as we had to work with another group **(Group#4)** and add combine both of those projects we've implemented that my allowing the users who play the game to get a pizza break by accessing out PizzaRadar Website, and we've also updated a new scoreboard, which will display user's scores from the game into out website.

## ***User Base***
* The people who may use the output of this project includes anybody looking for nearby pizza locations that may be interested in local pizza restaurants with directions, ratings, recommendations, etc.


## ***Installation***
***Please Install JS, Node, on your Debugger Before Running the following commands***

 ```bash
 1. Install xampp, open xampp control panel and start apache and mysql
2. Download phpmyadmin and unzip
3. Go here http://localhost/phpmyadmin/  (should see a webpage with phpmyadmin top left)
4.Create database, use pizza easy installation.
5. Create table, name: user, columns: 3
6. types of each respectively is int, varchar, varchar , and length/values of each respectively is 10, 255, 255
7. id -- attributes --> unsigned id --> A_I b/t index and comments --> check the box --> id should now have auto_increment.
8.Go back to database page by clicking phpmyadmin top left databases.
9.Go to your created database and click Check privileges.
10. Find user root, host name: localhost, click edit privileges
11. Change password near top, can use simple password like root.
12. Open vscode run, npm install
13. Go to .env file, port = 3000, host user, password of database should be whatever the user chose.
14. npm install dotenv
15 .node app
```
***That Should Open the link to the livebrowser or livehost***  

### ***Requirements***

* This project will require use of Google and possibly Yelp APIs. HTML CSS, and JavaScript will also be utilized.


### ***Contributing***
* Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

*  ***We also recommend to make a branch to the main branch in order to make any Development Changes*** 

* Please make sure to update tests as appropriate.

## ***License***
[MIT](https://choosealicense.com/licenses/mit/)
