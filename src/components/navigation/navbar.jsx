import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <navbar style={{ backgroundColor: '#add8e6', textAlign: 'center', padding: '1.5rem 0', marginTop: '2rem' }}>
      <div>
        <Link to="/" style={{ margin: '0 20px' }}>Home</Link>
        <Link to="/portfolio" style={{ margin: '0 20px' }}>Portfolio</Link>
        <Link to="/about" style={{ margin: '0 20px' }}>About</Link>
      </div>
    </navbar>
  );
}

export default Navbar;
