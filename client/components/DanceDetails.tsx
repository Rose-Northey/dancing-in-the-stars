import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import ReactPlayer from 'react-player/youtube'
import { useNavigate } from 'react-router-dom'

export default function DanceDetails() {
  const id:number = Number(useParams().id) 
  const navigate = useNavigate()
  
  const queryClient = useQueryClient()
  const makeCompleteMutation = useMutation({
    mutationFn: api.updateNumberCompleted,
    onSuccess: async()=>{
      queryClient.invalidateQueries({queryKey:['dances', 'completed',id]})
    }
  })

  const {
    data: singleDance,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['dances', 'completed', id], queryFn: () => api.getDanceDetails(id) })
  if (isError) {
    return <p>dance error!</p>
  }
  if (!singleDance || isLoading) {
    return <p>Loading...</p>
  }

 
  function handleClick (){ 
    const idAndIsComplete = {
      id, isComplete: singleDance.isComplete
    }
    makeCompleteMutation.mutate(idAndIsComplete)
    navigate(`/`)
  }


  return (
    <div className='dance-details'>
    <div className="dance-container">
      <div className='details-upper'>
        <h2>{singleDance.name}</h2>
        <p>{singleDance.description}</p>
      </div>
      <div className='details-lower'>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={singleDance.link}
          width='100%'
          height='100%'
        />
      </div>
      </div> 
    </div>
    <button onClick={handleClick}><p>{singleDance.isComplete?'I was wrong. I am':`Dance Mastery`}</p> <p className='complete'>{singleDance.isComplete?'incompetent':'complete'}</p></button>
  </div>
  )
}
