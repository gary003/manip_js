const axios = require('axios');

const getty = async () => {
  let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data
}

getty()
.then((users) => console.log(users))
.catch(err => console.log(err))
