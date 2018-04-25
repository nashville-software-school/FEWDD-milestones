'use strict';

//object for storing data (database)
const daisyBrothersToolshop = {};

//data orgainization (tables)
daisyBrothersToolshop.user = {}; // as obj
daisyBrothersToolshop.order = []; // as array
daisyBrothersToolshop.likedItems = [];

//add data to user obj
const user = {
    name: "Brenda",
    email: "brenda@email.com",
    zipcode: 37027
}

//test if the data already exists
if(!localStorage.getItem('daisyBrothersToolshopData')) {
    console.log("lets set some data");
    populateStorage();
  }else {
    console.log("get user");
    getDb();
  }

function populateStorage() {
    daisyBrothersToolshop.user = user;
    // convert to string
    const dbObjToString = JSON.stringify(daisyBrothersToolshop);
    localStorage.setItem('daisyBrothersToolshopData', dbObjToString);
}

function getDb(){
    const db = localStorage.getItem('daisyBrothersToolshopData');
    //parse to js object
    const parseDB = JSON.parse(db);
    console.log("currentUser", parseDB.user.name);
}




