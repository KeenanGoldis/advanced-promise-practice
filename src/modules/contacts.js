import getOneContact from "./get-one-contact";
import createContact from "./create-contact";

function theWebRequstIsDone(response) {
  //console.log("Contact response",response);
  return response.json();
//step 4 calls the json.
}
function jsonIsReady(data) {
  console.log("Contact data",data);
  document.getElementById("numberOfContacts").innerHTML = data.length;
  //step 6 does whatever you want to be done when the json is loaded!
}
//step 2 fetches the stuff
function loadAllContacts() {
  const webRequestPromise = fetch("/contacts");
  //step 3 calls webRequestPromise
  const getJsonPromise = webRequestPromise.then(theWebRequstIsDone);
  //step 5 calls jsonIsReady.
  getJsonPromise.then(jsonIsReady);
}
//step 1 calls the function
loadAllContacts();



fetch("/contacts").then(function (response) {
  return response.json();
}).then(function (data) {
  // do something with data
  console.log(data);
});


getOneContact(1).then(function (data) {
  document.getElementById("contactName").innerHTML = data.name;
});


window.createContact = function () {
  createContact({
    name: "Dale Cooper",
    occupation: "FBI Agent"
  }).then(function () {
    loadAllContacts();
  });
};
