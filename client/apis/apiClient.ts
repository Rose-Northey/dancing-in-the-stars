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
  return numberComplete.body
}

export async function updateNumberCompleted(idAndIsComplete) {
  console.log('update runs')
  const isComplete = idAndIsComplete.isComplete
  const id = idAndIsComplete.id
  const response = await request
  .patch(`${rootUrl}/${id}`)
  .send({isComplete})
  return{}
}
