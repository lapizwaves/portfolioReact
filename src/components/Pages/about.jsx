import pixelMe from './../images/other/pixelSelfPortrait.png';

function About(){
    return(
        <>
            <main style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '20px', 
                backgroundColor: 'black', 
                color: 'white', 
                height: '100vh', 
            }}>
                <div id="pixelMeImg" style={{
                    marginRight: '20px', 
                    flex: '0 0 auto', 
                    maxWidth: '300px',
                    borderRadius: '50%', 
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                }}>
                    <img 
                        src={pixelMe} 
                        alt="Pixelated self portrait" 
                        style={{
                            width: '100%', 
                            height: 'auto', 
                            borderRadius: '50%', 
                        }} 
                    />
                </div>
                <div id="aboutMe" style={{
                    maxWidth: '600px', 
                    textAlign: 'left',
                    backgroundColor: '#2e2e2e', 
                    padding: '20px', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                    flex: '1', 
                }}>
                    <p>Hello, I'm Rachel Gopman, a passionate and detail-oriented Digital Media Web Design major specializing in UI/UX design and front-end development. I thrive on creating intuitive and visually engaging digital experiences that prioritize user-centered design. I have hands-on experience with technologies such as HTML, CSS, JavaScript, React Native, and Figma. I aim to deliver seamless and accessible designs that balance functionality with aesthetic appeal. My goal is to bring innovative, user-friendly interfaces to life, and I'm excited to apply my skills in a dynamic and forward-thinking professional environment.</p>
                    <p>Contact Me: <a href="mailto:rachel.gopman@gmail.com" style={{ color: '#1e90ff' }}>rachel.gopman@gmail.com</a></p>
                </div>
            </main>
        </>
    );
}

export default About;
