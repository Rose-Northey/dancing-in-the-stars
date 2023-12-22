import request from 'superagent'
import { response } from 'express'


const rootUrl = '/api/v1/dances'

export async function getAllDances() {
  const allDanceHeadings = await request.get(`${rootUrl}/`)
  return allDanceHeadings.body
}

export async function getDanceDetails(id) {
  const data = {
    id: 1,
    name: 'Orange Justice',
    description: 'blah blah blah',
    link: 'https://youtu.be/Vcu5jPqqN1k?si=v53gNaOouFY-i_De',
    isComplete: 1,
  }

  return data

  //make a request for route 	/v1/dances/:id

  // return request.get(rootUrl + `dances/${id}`).then((res) => {
  //   return res.body
  // })
}

export async function getNumberCompleted() {
  const numberComplete = await request.get(`${rootUrl}/count`)
  console.log('hey')
  return numberComplete.body
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
