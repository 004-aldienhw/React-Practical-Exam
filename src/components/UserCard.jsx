import { useState } from "react";
import "../css/Usercard.css"
import profileIcon from "../assets/download-removebg-preview.png"
import UserModal from "./UserModal";

export default function UserCard({ user, setSelectedUser }) {
    const [liked, setLiked] = useState(false)
    const [followed, setFollowed] = useState(false)

    return (
        <>
        <div className="usercard">
            <img src={profileIcon} alt="UserIcon" width={70}/>
            <h3>{user.name}</h3>
            <p>@{user.username}</p>
            <p>{user.email}</p>
            <div className="buttons">
                <button
                className={`btn ${liked ? "pop likedbtn" : "likebtn"}`}
                onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>
                <button
                className={followed ? "followingbtn" : "followbtn"}
                onClick={() => setFollowed(!followed)}>{followed ? "Following" : "Follow +"}</button>
            </div>
            <button className="info" onClick={() => setSelectedUser(user)}>More Info</button>
        </div>
        </>
    )
}