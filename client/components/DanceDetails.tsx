import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import ReactPlayer from 'react-player/youtube'

export default function DanceDetails() {
  const id:number = Number(useParams().id)

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

  }


  return (
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
      <button onClick={handleClick}><p>Dance Mastery</p> <p className='complete'>Complete</p></button>
    </div>
  )
}
