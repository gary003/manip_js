const request = require('superagent');

const getty = async () => {
  let res = await request.get('http://localhost:8888/findAll')
  let users = JSON.parse(res.text)
  return users
}

getty().then((users) => {
  console.log(users)
})
