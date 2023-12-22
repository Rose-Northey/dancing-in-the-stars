import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

// api/v1/dances
router.get('/', async (req, res) => {
  try {
    const dances = await db.getAllDances()

    res.json(dances)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong!' })
  }
})

// /v1/dances/count
router.get('/count', async (req, res) => {
  try {
    const isCompleteArray = await db.countCompletion()
    let count:number = 0;
    isCompleteArray.map((obj)=>{obj.isComplete?count++:count})
    res.json(count)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong!' })
  }
})

// /v1/dances/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const singleDance = await db.getDancebyId(id)
    res.json(singleDance)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong!' })
  }
})

// /v1/dances/:id
router.patch('/:id', async (req, res) => {
  const currentlyIsComplete = req.body.isComplete
  try {
    const id = parseInt(req.params.id)
    const patchObject = {id, currentlyIsComplete}
    const completionArray = await db.updateCompletion(patchObject)
    res.json(completionArray)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong!' })
  }
})

export default router
