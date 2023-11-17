import { useQuery } from '@tanstack/react-query'
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
    <div className="dance-container">
      {dances.map((dance) => (
        <div className="dance-div" key={dance.id}>
          {dance.name}
        </div>
      ))}
    </div>
  )
}
