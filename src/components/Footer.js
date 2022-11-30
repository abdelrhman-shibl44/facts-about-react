export const Footer = (props) => {
    return (
        <footer style={props.light ? { background: "#fff" } : { background: "#000", color: "#fff" }}>
            <small>@copy 20xx shibl development. All rights reserved.</small>
        </footer>
    )
}