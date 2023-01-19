export function Navbar({ children }) {

    return (
        <nav 
            className="navbar" 
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                padding: "10px 0"
            }}
        >

            {children}

        </nav>
    )
    
}