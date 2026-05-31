import { useContext } from "react";
import { UserContext } from "./UserContext";
import UserCard from "./UserCard";
import "../css/Userlist.css"

export default function Userlist () {
    const { users, search } = useContext(UserContext);

    return (
        <>
        <div className="usercards">
            {users.length === 0 && search ? (
                <h1>No User found for "{search}"</h1>
            ) : (
            users.map((user) => (
                <UserCard key={user.id} user={user} />
                ))
            )}
        </div>
        </>
    )
}