import connection from './connection.ts'
import { Fruit, Dance } from '../../models/Dances.ts'

export async function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}

export async function getAllDances(db = connection): Promise<Dance[]> {
  return db('Dances').select('*', 'is_complete as isComplete').returning('*')
}

export async function getDancebyId(
  id: number,
  db = connection,
): Promise<Dance[]> {
  console.log()
  return db('Dances')
    .select('*', 'is_complete as isComplete')
    .where('id', id)
    .first()
}

export async function countCompletion(db = connection): Promise<Dance[]> {
  return db('Dances')
    .select('is_complete as isComplete')
    .count('* as count')
    .groupBy('Dances.is_complete')
}

export async function updateCompletion(
  id: number,
  isComplete: boolean,
  db = connection,
) {
  return db('Dances')
    .where({ id })
    .update({ isComplete: isComplete })
    .returning(['id', 'isComplete as is_complete'])
}
