import "../css/UserModal.css"
import profileIcon from "../assets/download-removebg-preview.png"

export default function UserModal({ user, onClose }) {
    if (!user) return null;

    return (
        <div className="modaloverlay" onClick={onClose}>
            <div className="modalcontent" onClick={(e) => e.stopPropagation()}>
                <img className="moreinfoprofile" src={profileIcon} alt="UserIcon" />
                <div>
                    <h2>{user.name}</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Company: {user.company.name}</p>
                    <div className="closebtn">
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
               
            </div>
        </div>
    )
}