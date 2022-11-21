export const Footer = () => {
    const footer = {
        position: "absolute",
        left: '0',
        bottom: '0',
        padding: '20px 0',
        background: "#000",
        color: "#fff",
        width: '100%',
        textAlign: 'center'
    }
    return (
        <footer style={footer}>
            <small>@copy 20xx shibl development. All rights reserved.</small>
        </footer>
    )
}