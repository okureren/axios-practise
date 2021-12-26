import axios from "axios";

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );

    reject("There is a problem");
  });
};

const getUser = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    resolve(data);
  });
};

(async () => {
  await getPost(10)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  await getUser(5)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
})();

// if u want to using with try and catch;

/*
(async () => {
  try {
    const users = await getUser(7);
    const posts = await getPost(17);

    console.log(users);
    console.log(posts);
  } catch (e) {
    console.log(e);
  }
})();
*/
