import Topbar from "../topbar/Topbar"
import logo from "../../assets/img/logo.png"
import { NavLink  , Link} from "react-router-dom"

const Header = () => {
  return (
   <>
     {/* <!--================Header Menu Area =================--> */}
  <header className="header_area">
   
   {/* topbar incluse  start */}
   <Topbar />
   {/* topbar incluse end */}
      

    <div className="main_menu">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light w-100">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <Link className="navbar-brand logo_h" href="index.html">
            <img src={logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
            <div className="row w-100 mr-0">
              <div className="col-lg-7 pr-0">
                <ul className="nav navbar-nav center_nav pull-right">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/shop">Shop</NavLink>
                  </li>
                
               
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="tracking.html">Tracking</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="elements.html">Elements</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-5 pr-0">
                <ul className="nav navbar-nav navbar-right right_nav pull-right">
                  <li className="nav-item">
                    <a href="#" className="icons">
                      <i className="ti-search" aria-hidden="true"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="icons">
                      <i className="ti-shopping-cart"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="icons">
                      <i className="ti-user" aria-hidden="true"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="icons">
                      <i className="ti-heart" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  {/* <!--================Header Menu Area =================--> */}
   </>
  )
}

export default Header