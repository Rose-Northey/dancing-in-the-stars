import request from 'superagent'
import { response } from 'express'


const rootUrl = '/api/v1/dances'

export async function getAllDances() {
  const allDanceHeadings = await request.get(`${rootUrl}/`)
  return allDanceHeadings.body
}

export async function getDanceDetails(id) {
  const danceDetails = await request.get(`${rootUrl}/${id}`)
  return danceDetails.body
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
