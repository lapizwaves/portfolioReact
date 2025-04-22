
function Title() {
    var firstName = "Rachel";
    var lastName = "Gopman";
    var job = "Front-End Developer"

    return(
        <>
            <main>
                <div>
                    <h1>Hello, my name is</h1>
                    <h1>{firstName} {lastName}</h1>
                    <h2>I am a {job}</h2>
                    <h2>To learn more, please view my portfolio page</h2>
                </div>
            </main>
        </>
    )
}

export default Title;