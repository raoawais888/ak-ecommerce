import {NavLink} from "react-router-dom"

const Breadcrumb = ({title}) => {
  return (
<>
{/* <!--================Home Banner Area =================--> */}
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content d-md-flex justify-content-between align-items-center">
            <div class="mb-3 mb-md-0">
              <h2>{title}</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div class="page_link">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/shop">Women Fashion</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--================End Home Banner Area =================--> */}
    
</>
  )
}

export default Breadcrumb