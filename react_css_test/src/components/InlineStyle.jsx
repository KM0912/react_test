export const InlineStyle = () => {
    const containerStyle = {
        height: "50px",
        width: "200px",
        backgroundColor : "#0075c2",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    };

    const titleStyle = {
        color:"white"
    }

    return (
        <>
            <div style={containerStyle}>
                <p style={titleStyle}>Inline Style</p>
            </div>
        </>
    );
}