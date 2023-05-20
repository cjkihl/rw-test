import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, signUp, logOut, logIn, currentUser, getCurrentUser } = useAuth()


  // useEffect(() => {
  //   getCurrentUser().then(r => console.log(r))
  // },[])
  console.log({isAuthenticated, currentUser })
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <div>
        <button onClick={() => signUp()}>Sign up</button>
        <button onClick={() => logIn()}>login</button>
        <button onClick={() => logOut()}>logout</button>

        <div>{isAuthenticated ? 'authenticated':' not'}</div>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </div>
    </>
  )
}

export default HomePage
