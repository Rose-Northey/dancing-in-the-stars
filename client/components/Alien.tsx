export default function Alien() {
  return (<>
    <div className="alien-container">
      <h2>Skinsuit Progress</h2>
      <div className='alien-container-lower'>
        {/* <div className="spacer"></div> */}
        
        <div className='alien'>
          <img className="head" src="/aHead.PNG" alt="Alien head"></img>
          <img className="body" src="/aBody.PNG" alt="alien body"></img>
          <img className="legs" src="/aKnees.PNG" alt="alien legs"></img>
          <img className="feet"src="/aFeet.PNG" alt="alien feet"></img>
        </div>
      </div>
    </div>
    </>
  )
}
