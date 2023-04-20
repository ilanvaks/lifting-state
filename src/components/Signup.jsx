export default function Signup ({setUser}) {
  return (
    <>
      <h2>Signup</h2>
        <button onClick={() => setUser("New User")}>Sign Up</button>
    </>
  )
}