import getOneComment from "./get-one-comment";
import createComment from "./create-comment";

function loadAllComments() {
  // 1) Long way (SUCKS!)
  function theWebRequstIsDone(response) {
    console.log("Contact response",response);
    return response.json();

  }
  function jsonIsReady(data) {
    console.log("Contact data",data);
    document.getElementById("numberOfContacts").innerHTML = data.length;

  }

  function loadAllContacts() {
    const webRequestPromise = fetch("/contacts");
    const getJsonPromise = webRequestPromise.then(theWebRequstIsDone);
    getJsonPromise.then(jsonIsReady);
  }
  loadAllContacts();


  // 2) Short way
  fetch("/comments").then(function (response) {
    return response.json();
  }).then(function (data) {
    // do something with data
    console.log(data);
  });
}
loadAllComments();

// 3) We can use promises from other modules
getOneComment(1).then(function (data) {
  document.getElementById("comment").innerHTML = data.postId;
});

window.createComment = function () {
  createComment({
    body: "ACA is great!",
    postId: 1
  }).then(function () {
    loadAllComments();
  });
};
