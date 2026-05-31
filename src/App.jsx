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
  <div className="app">
  <UserContext.Provider value={{ users: filteredUsers, search }}>
    <Navbar search={search} setSearch={setSearch}></Navbar>
    <main className="content">
      <Userlist></Userlist>
    </main>
    <Footer></Footer>
  </UserContext.Provider>
  </div>
  )
}

export default App
