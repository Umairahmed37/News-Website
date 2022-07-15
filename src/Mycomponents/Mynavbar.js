import { Navbar, Nav, Container, NavDropdown, } from "react-bootstrap"
import PropTypes from 'prop-types'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import React, { useState } from 'react'
import "./App.css"
import { NavLink, Link } from "react-router-dom";


function Mynavbar(props) {

  const [styledark, setStyledark] = useState({
    backgroundColor: "#f1f2f6"
  })

  const [Mylinks, setMylinks] = useState({
    color: "black"
  })

  const darkmode = () => {

    if (styledark.backgroundColor === "#f1f2f6") {
      setStyledark({
        backgroundColor: "black",
        transitionDuration: '1s'

      })
      setMylinks({
        color: "white",
        transitionDuration: '1s'
      })
      props.darktheme(true)


    } else {
      setStyledark({
        backgroundColor: "#f1f2f6",
        transitionDuration: '1s'
      })
      setMylinks({
        color: "black",
        transitionDuration: '1s'
      })
      props.darktheme(false)
    }
  }
  return (
    <div>
      <Navbar className="Mynav fixed-top" style={styledark} expand="md" >
        <Container>
          <Navbar.Brand as={Link} style={Mylinks} to="/">{props.site}</Navbar.Brand>
          <Navbar.Toggle aria-controls="mynav" />
          <Navbar.Collapse id="mynav" className="justify-content-end">
            <Nav className="ml-auto">

              <Nav >
                <NavDropdown title="Categories">
                  <NavDropdown.Item as={Link} to="/Business">Business</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Entertainment">Entertainment</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Science">Science</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Politics">Politics</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Health">Health</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav.Link as={Link} exact to="/features" style={Mylinks} > Features</Nav.Link>
              <Nav.Link as={Link} to="/Pricing" style={Mylinks} >Pricing</Nav.Link>
              <Nav.Link as={Link} to="/AboutUs" style={Mylinks} className="pricing" >{props.about}</Nav.Link>
              <BootstrapSwitchButton onChange={darkmode} checked={false} size="xs" onstyle="dark" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

Mynavbar.propTypes = {
  site: PropTypes.string,
  about: PropTypes.string
}
Mynavbar.defaultProps = {
  site: "No logo",
  about: "about us"
}

export default Mynavbar
