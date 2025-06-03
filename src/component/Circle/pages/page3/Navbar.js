import { NavLink } from "react-router-dom"

const Navbar = ({ user }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/page3/">
                  Home
                </NavLink>
              </li>

              {!user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/register">
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/logout">
                      LogOut
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/users">
                      Users
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page3/dashbord">
                      Dashbord
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
