import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import * as api from '../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function DanceList() {
  const {
    data: dances,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['dances','complete'], queryFn: api.getAllDances })

  if (isError) {
    return <p>dance error!</p>
  }

  if (!dances || isLoading) {
    return <p>Loading...</p>
  }

  // function handleCheckBox (id, isComplete){ 
  //   const idAndIsComplete = {
  //     id, isComplete
  //   }
  //   makeCompleteMutation2.mutate(idAndIsComplete)
  // }



  return (
    <div className="dance-list">
      <h2>
        Human Dances
      </h2>
      {dances.map((dance) => (
        <div className='dance-list-item' key={dance.id}>
        <Link to ={`/dances/${dance.id}`} >
          <div className='link'>
            <h3 >{dance.name}</h3>
          </div>
        </Link>
        <img src={dance.isComplete?'/checked.png':'/unchecked.png'}/>
        {/*onClick={()=>{handleCheckBox(dance.id, dance.isComplete)}} */ }
        </div>
      ))}
    </div>
  )
}
