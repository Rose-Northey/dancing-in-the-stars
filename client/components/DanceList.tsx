import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import * as api from '../apis/apiClient'

export default function DanceList() {
  const {
    data: dances,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['dances'], queryFn: api.getAllDances })

  if (isError) {
    return <p>dance error!</p>
  }

  if (!dances || isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="dance-list">
      <h2>
        Human Dances
      </h2>
      {dances.map((dance) => (
        <Link to ={`/dances/${dance.id}`} key={dance.id}>
        <h3 >{dance.name}</h3>
        </Link>
      ))}
    </div>
  )
}
