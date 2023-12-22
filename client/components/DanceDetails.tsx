import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/apiClient'

export default function DanceDetails() {
  const id:number = Number(useParams().id)

  const {
    data: singleDance,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['dances', id], queryFn: () => api.getDanceDetails(id) })

  if (isError) {
    return <p>dance error!</p>
  }

  if (!singleDance || isLoading) {
    return <p>Loading...</p>
  }
  console.log(singleDance)
  return (
    <div className="dance-container">
      <div className='details-LHS'>
        <h2>Dance: </h2>
        <h3>{singleDance.name}</h3>
        <h2>Description:</h2>
        <p>{singleDance.description}</p>
      </div>
      <div className='details-RHS'>
        
      </div>
    </div>
  )
}
