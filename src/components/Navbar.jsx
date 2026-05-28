import { useRef } from "react";

export default function Navbar({search, setSearch}) {
    const inputRef = useRef();
    
    return (
        <>
        <nav>
            <h1>Social Media</h1>

            <input
            ref={inputRef}
            type="text"
            placeholder="Search user here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={() => inputRef.current.focus()}>Focus</button>
        </nav>
        </>
    )
}