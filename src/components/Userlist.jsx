import { useContext } from "react";
import { UserContext } from "./UserContext";
import UserCard from "./UserCard";

export default function Userlist () {
    const { users } = useContext(UserContext);

    return (
        <>
        <div>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
        </>
    )
}