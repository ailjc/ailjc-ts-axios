import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'post',
  url: '/simple/post',
  data: {
    c: 3,
    d: 4
  }
})
