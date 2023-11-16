import { getAllDances } from '../apis/apiClient'

export default function HomePage() {
  getAllDances()

  return (
    <>
      <h2>HomePage is working</h2>
    </>
  )
}
