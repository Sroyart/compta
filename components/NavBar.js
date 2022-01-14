import Link from "next/link"
import React from "react"

const NavBar = () => {
  return (
    <div>
      <Link href="/">
        <a>Dashboard</a>
      </Link>

      <Link href="/form">
        <a>Add entry</a>
      </Link>
    </div>
  )
}

export default NavBar
