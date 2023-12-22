import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

// router.get('/', async (req, res) => {
//   try {
//     const fruits = await db.getAllFruits()

//     res.json({ fruits: fruits.map((fruit) => fruit.name) })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

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
    const count = await db.countCompletion()

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
  try {
    const id = parseInt(req.params.id)
    console.log(id)

    const completionArray = await db.updateCompletion(id)

    res.json(completionArray)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong!' })
  }
})

export default router
