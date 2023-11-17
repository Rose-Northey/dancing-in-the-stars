import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/apiClient'

const id = useParams

export default function DanceDetails() {
  const {
    data: dance,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['dance'], queryFn: api.getDanceDetails(id) })

  if (isError) {
    return <p>dance error!</p>
  }

  if (!dance || isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="dance-container">
      {dance.map((d) => (
        <div className="dance-div" key={dance.id}>
          {dance.name}
        </div>
      ))}
    </div>
  )
}
