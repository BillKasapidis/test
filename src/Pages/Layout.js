import { Outlet, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import './Metronome.css';

const Layout = () => {
  return (
    <>
      <nav>
        <Dropdown>
            <Dropdown.Toggle variant='success'>Pages</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item><Link to="/" className="link">Home</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/metronome" className="link">Metronome</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/greetings" className="link">Greetings</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/silliness" className="link">Silliness</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/tictactoe" className="link">TicTacToe</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;