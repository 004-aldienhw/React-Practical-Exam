import { useState } from "react";
import "../css/Usercard.css"
import profileIcon from "../assets/download-removebg-preview.png"

export default function UserCard({ user }) {
    const [liked, setLiked] = useState(false)
    const [followed, setFollowed] = useState(false)

    return (
        <>
        <div className="usercard">
            <img src={profileIcon} alt="UserIcon" width={70}/>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>@{user.username}</p>
            <div>
                <button
                className={`btn ${liked ? "pop likedbtn" : "likebtn"}`}
                onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>
                <button
                className={followed ? "followingbtn" : "followbtn"}
            onClick={() => setFollowed(!followed)}>{followed ? "Following" : "Follow +"}</button>
            </div>
        </div>
        </>
    )
}