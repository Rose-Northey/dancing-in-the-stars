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

  return data
  // return request.get(rootUrl + '/dances').then((res) => {
  //   return res.body
  // })
}

export async function getDanceDetails(id) {
  const data = {
    id: 1,
    name: 'Orange Justice',
    description: 'blah blah blah',
    link: 'youtube url',
    isComplete: false,
  }
  console.log()

  return data

  //make a request for route 	/v1/dances/:id

  // return request.get(rootUrl + `dances/${id}`).then((res) => {
  //   return res.body
  // })
}
