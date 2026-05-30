import { useState } from "react";

export default function UserCard({ user }) {
    const [liked, setLiked] = useState(false)
    const [followed, setFollowed] = useState(false)

    return (
        <>
        <div style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px"
        }}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>@{user.username}</p>
            <button onClick={() => setLiked(!liked)}>{liked ? "❤️ Liked" : "🤍 Like"}</button>
            <button onClick={() => setFollowed(!followed)}>{followed ? "Following" : "Follow"}</button>
        </div>
        </>
    )
}