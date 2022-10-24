import { useEffect, useState } from "react"
// import { supabase } from "../../utils/supabaseClient"
import { useRouter } from "next/router"
import { useLoginCtx } from "../../context/LoginCtx"
// console.log('supabase:', supabase)

const initialState = {
  email: "",
  password: ""
}

// const signInWithEmail = async (email, password) => {
//   const result = await supabase.auth.signInWithPassword({
//     email,
//     password
//   })
//   return result
// }

const Login = () => {
  const [formValues, setFormValues] = useState(initialState)
  const router = useRouter()
  const { setIsLogin } = useLoginCtx()

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const { email, password } = formValues

  //   const result = await supabase.auth.signInWithPassword({
  //     email,
  //     password
  //   })
  //   console.log("result:", result)

  //   // console.log("Finish")
  //   setIsLogin(true)
  //   router.push("/")
  // }

  const handleEmail = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      email: e.target.value
    }))
  }
  const handlePassword = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      password: e.target.value
    }))
  }

  const copyEmail = () => {
  }
  const copyPassword = () => {
    navigator.clipboard.writeText("password1")
  }

  return (
    <>
      Login here
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" onChange={handleEmail} />
        <label>Password</label>
        <input type="password" onChange={handlePassword} />
        <button>Submit</button>
      </form>
      {/* <p onClick={copyEmail}>Email</p> */}
      {/* <p onClick={copyPassword}>Password</p> */}
    </>
  )
}

export default Login
