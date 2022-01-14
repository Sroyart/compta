import { useState } from "react"
import NavBar from "../components/NavBar"
import tableContext from "../context/tableContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const [incomes] = useState([])
  const contextValue = {
    incomes,
  }

  return (
    <tableContext.Provider value={contextValue}>
      <NavBar />
      <Component {...pageProps} />
    </tableContext.Provider>
  )
}

export default MyApp
