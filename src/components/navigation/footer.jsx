function Footer() {
    return (
      <footer style={{
        backgroundColor: '#add8e6',
        textAlign: 'center',
        padding: '1.5rem 0',
        marginTop: '2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="https://www.instagram.com/idrawzen" target="_blank" rel="noopener noreferrer">
            <box-icon type="logo" name="instagram" color="#000"></box-icon>
          </a>
          <a href="https://www.linkedin.com/in/rachel-gopman/" target="_blank" rel="noopener noreferrer">
            <box-icon type="logo" name="linkedin-square" color="#000"></box-icon>
          </a>
          <a href="https://github.com/lapizwaves" target="_blank" rel="noopener noreferrer">
            <box-icon type="logo" name="github" color="#000"></box-icon>
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  