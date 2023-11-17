import { Outlet } from 'react-router-dom'


function Layout() {


  return (
    <>
    <Header />
    <h1> Layout is working</h1>
      <Outlet />
    </>
  )
}

export default Layout
