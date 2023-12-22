import {Link} from 'react-router-dom'
export default function Header(){

  return( <>
      <header>
        <div>
          <h1>Dancing In The Stars</h1>
          <Link to='/'><button><p>Home</p></button></Link>
        </div>
        <p className= "subheader">become human through dance</p>
      </header>
    </>)
}