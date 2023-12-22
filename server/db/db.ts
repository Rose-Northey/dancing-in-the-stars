import connection from './connection.ts'
import { Fruit, Dance } from '../../models/Dances.ts'

const db= connection;

export async function getAllDances(): Promise<Dance[]> {
  return db('Dances')
    .select('id', 'name', 'is_complete as isComplete')
    .returning('*')
}

export async function getDancebyId(
  id: number,
  db = connection,
): Promise<Dance[]> {
  console.log()
  return db('Dances')
    .select('id', 'name', 'description', 'link', 'is_complete as isComplete')
    .where('id', id)
    .first()
}

export async function countCompletion(): Promise<Dance[]> {
  return db('Dances').select('is_complete as isComplete')
}

export async function updateCompletion({id, currentlyIsComplete}) {
  return db('Dances').where({ id }).update({ is_complete: !currentlyIsComplete })
}
