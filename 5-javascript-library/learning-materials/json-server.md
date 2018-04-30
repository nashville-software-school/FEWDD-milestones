# JSON-SERVER

https://github.com/typicode/json-server

## Get Started
* `npm install -g json-server` You may also install per project/directory
* create json file
```js
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
* Start 'Static' server: `json-server myJSON.json
* View site for **database and routes**
* See docs for more options
* Changes (update, delete, add, patch) are reflected in original json.

### Notes
* Use Postman to test calls; be sure to set header `json(application/json)` for data to be sent successfully.
* Type `s` in terminal to save a current state of db.
* Run `hs-server` to view your site connected to db - same directory.

#

## Generating Fake Data

* `npm install faker`
* Create JS file to generate the data

```
// customers.js

var faker = require('faker')

function generateCustomers () {
  var customers = []

  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.firstName()
    var phoneNumber = faker.phone.phoneNumberFormat()

    customers.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "phone": phoneNumber
    })
  }

  return { "customers": customers }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateCustomers
```

* Now tell json-server to use customers.js as the data source
`json-server customers.js`

### Faker js Notes
* Stop and start server will re-load the `customers.js` (start from scratch)
* Optional: save data to json and restart server with new json file.

### Resouces for faker data
* https://coligo.io/create-mock-rest-api-with-json-server/
* https://scotch.io/tutorials/json-server-as-a-fake-rest-api-in-frontend-development
