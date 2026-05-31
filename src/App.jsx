import Navbar from "./components/Navbar"
import Userlist from "./components/Userlist"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { UserContext } from "./components/UserContext"
import "./App.css"

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, []);

  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase()));
  return(
  <>
  <UserContext.Provider value={{ users: filteredUsers, search }}>
    <div>
      <Navbar search={search} setSearch={setSearch}></Navbar>
      <Userlist></Userlist>
      <Footer></Footer>
    </div>
  </UserContext.Provider>
  </>
  )
}

export default App
