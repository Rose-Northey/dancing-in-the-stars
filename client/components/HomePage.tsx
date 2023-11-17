import { getAllDances, getNumberCompleted } from '../apis/apiClient'
import DanceList from './DanceList'
import Alien from './Alien'

export default function HomePage() {
  getAllDances()
  getNumberCompleted()

  return (
    <>
      <h2>HomePage is working</h2>
      <DanceList />
      <Alien />
    </>
  )
}
