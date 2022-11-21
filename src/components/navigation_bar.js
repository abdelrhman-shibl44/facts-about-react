export const Navigation = () => {
    const navbarStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: "0 15px",
        backgroundColor: '#000',
        color: '#fff',
    }
    const listStyle = {
        paddingLeft: '0',
        listStyle: 'none',
        display: 'flex'
    }
    const anchorStyle = {
        textDecoration: 'none',
        color: '#fff',
        padding: ' 0 15px',
        fontSize: '20px'
    }
    return (
        <nav style={navbarStyle}>
            <h1 style={{ fontSize: "28px" }}>ABDELRHMAN</h1>
            <ul style={listStyle}>
                <a style={anchorStyle} href="#"><li>Home</li></a>
                <a style={anchorStyle} href="#"><li>Services</li></a>
                <a style={anchorStyle} href="#"><li>About</li></a>
                <a style={anchorStyle} href="#"><li>Blog</li></a>
            </ul>
        </nav>
    )
}