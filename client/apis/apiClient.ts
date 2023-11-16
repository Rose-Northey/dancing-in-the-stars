import request from 'superagent'

const rootUrl = '/v1'

export async function getAllDances() {
  const data = [
    {
      id: 1,
      name: 'Orange Justice',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Red Justice',
      isComplete: false,
    },
  ]
  console.log(data)
  return data
  // return request.get(rootUrl + '/dances').then((res) => {
  //   return res.body
  // })
}
