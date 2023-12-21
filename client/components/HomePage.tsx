import { getAllDances, getNumberCompleted } from '../apis/apiClient'
import DanceList from './DanceList'
import Alien from './Alien'

export default function HomePage() {
  getAllDances()
  getNumberCompleted()

  return (
    <>
      <div className='homepage'>
        <div className="LHS">
          <DanceList />
        </div>
        <div className="RHS">
          <Alien />
        </div>
      </div>
    </>
  )
}
