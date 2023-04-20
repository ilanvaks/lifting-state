export default function Login ( {setUser} ) {
  return (
    <>
     <h2>Login</h2>
    <button onClick={() => setUser("Returning User")}>Login</button>
    </>
  )
}