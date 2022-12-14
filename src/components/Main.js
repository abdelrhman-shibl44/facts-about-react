export const Body = (props) => {
    return (
        <div className={`body ${props.light ? "light" : "dark"}`} >
            <div className="container">
                <h1 className="header">Fun facts about React</h1>
                <ul className="unorderdList" style={{ fontSize: '22px' }}>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div >
    )
}
// end Body