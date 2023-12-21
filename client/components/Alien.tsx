export default function Alien() {
  return (<>
    <div className="alien-container">
      <h2>Skinsuit Progress</h2>
      <div className='alien-container-lower'>
        <div className="spacer"></div>
        <div className='alien'>
          <img className="head" src="public/aHead.PNG" alt="Alien head"></img>
          <img className="body" src="public/aBody.PNG" alt="alien body"></img>
          <img className="legs" src="public/aKnees.PNG" alt="alien legs"></img>
          <img className="feet"src="public/aFeet.PNG" alt="alien feet"></img>
        </div>
      </div>
    </div>
    </>
  )
}
