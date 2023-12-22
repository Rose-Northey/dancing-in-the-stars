import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/apiClient'

export default function Alien() {
  const {
    data: num,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['completed'], queryFn: api.getNumberCompleted })

  if (isError) {
    return <p>dance error!</p>
  }

  if (!num || isLoading) {
    return <p>Loading...</p>
  }

  return (<>
    <div className="alien-container">
      <h2>Skinsuit Progress</h2>
      <div className='alien-container-lower'>
        <div className='alien'>
          <img className="head" src={num>3?"/hHead.PNG":"/aHead.PNG"} alt="Alien head"></img>
          <img className="body" src={num>2?"/hArms.PNG":"/aBody.PNG"} alt="alien body"></img>
          <img className="legs" src={num>1?"/hKnees.PNG":"/aKnees.PNG"} alt="alien legs"></img>
          <img className="feet"src={num>0?"/hFeet.PNG":"/aFeet.PNG"} alt="alien feet"></img>
        </div>
      </div>
    </div>
    </>
  )
}
