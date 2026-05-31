import { useContext } from "react";
import { UserContext } from "./UserContext";
import UserCard from "./UserCard";
import "../css/Userlist.css"
import UserModal from "./UserModal";

export default function Userlist ({setSelectedUser}) {
    const { users, search } = useContext(UserContext);

    return (
        <>
        <div className="usercards">
            {users.length === 0 && search ? (
                <h1 className="notfound">No User found for "{search}"</h1>
            ) : (
            users.map((user) => (
                <UserCard key={user.id} user={user} setSelectedUser={setSelectedUser}/>
                ))
            )}
        </div>
        </>
    )
}