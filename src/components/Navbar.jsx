import { useRef } from "react";
import "../css/Navbar.css"
import profileIcon from "../assets/download-removebg-preview.png"

export default function Navbar({search, setSearch}) {
    const inputRef = useRef();
    
    return (
        <>
        <nav>
            <h1 className="socialmedia">Redz</h1>
            
            <div>
            <input
            ref={inputRef}
            type="text"
            placeholder="Search user here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            <button className="clearbtn" onClick={() => {
                setSearch("");
                inputRef.current.focus()
            }}>Clear</button>
            </div>

            <img className="navprofile" src={profileIcon} alt="UserIcon" width={70}/>
        </nav>
        </>
    )
}