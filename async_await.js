const axios = require('axios');

const getty = async () => {
  let res = await axios.get('http://localhost:8888/api/client/findAll')
  return res.data
}

getty()
.then((users) => {
  console.log(users)
})
.catch(err => console.log(err))

