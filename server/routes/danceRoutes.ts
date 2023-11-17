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

router.get('/', async (req, res) => {
  try {
    const dances = await db.getAllDances()

    res.json(dances)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong!' })
  }
})

router.get('/count', async (req, res) => {
  try {
    const count = await db.countCompletion()

    res.json(count)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong!' })
  }
})

router.patch('/count/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { isComplete } = req.body
    const updatedCount = await db.updateCompletion(id, isComplete)

    res.json(updatedCount)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong!' })
  }
})

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

export default router
