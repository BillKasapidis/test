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
                <Dropdown.Item><Link to="/test" className="link">Home</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/test/metronome" className="link">Metronome</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/test/greetings" className="link">Greetings</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/test/madlib" className="link">MadLib</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/test/tictactoe" className="link">TicTacToe</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;