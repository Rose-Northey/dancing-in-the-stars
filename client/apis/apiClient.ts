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

  return data

  //make a request for route 	/v1/dances/:id

  // return request.get(rootUrl + `dances/${id}`).then((res) => {
  //   return res.body
  // })
}

export async function getNumberCompleted() {
  const data = [
    {
      isComplete: false,
    },
    {
      isComplete: true,
    },
    {
      isComplete: true,
    },
    {
      isComplete: true,
    },
  ]

  // Map out object
  // When is complete is true; add 1 to the sum
  // Sum start at 0

  let numberCompleted = 0

  data.map((object) => {
    if (object.isComplete === true) {
      numberCompleted++
    }
  })
  console.log(numberCompleted)

  return numberCompleted
}

export async function updateNumberCompleted(id) {
  // input the id
  // add true no matter what it is
  //true no matter what it is

 console.log('patch function runs')
  
  // await request.patch(`/v1/dances/${id}`).send({
  //   "isComplete": true,
  // })

}
