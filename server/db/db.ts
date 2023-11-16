import connection from './connection.ts'
import { Fruit, Dance } from '../../models/Dances.ts'

export async function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}

export async function getAllDances(db = connection): Promise<Dance[]> {
  return db('Dances').select('*', 'is_complete as isComplete')
}

export async function getDancebyId(
  { id }: Dance,
  db = connection,
): Promise<Dance[]> {
  return db('Dances').select('*', 'is_complete as isComplete').where('id', id)
    .first
}

export async function countCompletion(db = connection): Promise<Dance[]> {
  return db('Dances').select('is_complete as isComplete')
}

export async function updateCompletion(
  { id, isComplete }: Dance,
  db = connection,
): Promise<Dance[]> {
  return db('Dances').update({ isComplete: isComplete }).where('id', id)
}
