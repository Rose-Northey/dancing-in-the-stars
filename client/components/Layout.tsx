import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="bg">
        <h1> Layout is working</h1>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
