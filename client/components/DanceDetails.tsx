import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/apiClient'

export default function DanceDetails() {
  const id = Number(useParams)
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
        <div className="dance-div" key={d.id}>
          <p>{d.name}</p>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  )
}
