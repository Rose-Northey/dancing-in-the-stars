import {Link} from 'react-router-dom'
export default function Header(){

  return( <>
      <header>
        <div>
          <h1>Dancing In The Stars</h1>
          <Link to='/'><button><p>Home</p></button></Link>
        </div>
        <p className= "subheader">why be a human master, when you could be a dance-master?</p>
      </header>
    </>)
}