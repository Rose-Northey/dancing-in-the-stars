import { getAllDances, getNumberCompleted } from '../apis/apiClient'

export default function HomePage() {
  getAllDances()
  getNumberCompleted()

  return (
    <>
      <h2>HomePage is working</h2>
    </>
  )
}
