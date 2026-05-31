import Navbar from "./components/Navbar"
import Userlist from "./components/Userlist"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { UserContext } from "./components/UserContext"
import "./App.css"
import UserModal from "./components/UserModal"

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [selecteduser, setSelectedUser] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, []);

  useEffect(() => {
    if (selecteduser) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [selecteduser])

  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase()));
  return(
  <div className="app">
  <UserContext.Provider value={{ users: filteredUsers, search }}>
    <Navbar search={search} setSearch={setSearch}></Navbar>
    <main className="content">
      <Userlist setSelectedUser={setSelectedUser}></Userlist>
      <UserModal user={selecteduser} onClose={() => setSelectedUser(null)}></UserModal>
    </main>
    <Footer></Footer>
  </UserContext.Provider>
  </div>
  )
}

export default App
