function createComment(contact) {
  return fetch("/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  });
}

export default createComment;
