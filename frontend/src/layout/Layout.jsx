import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import "../assets/css/bootstrap.css"
import "../assets/vendors/linericon/style.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/themify-icons.css"
import "../assets/css/flaticon.css"
import "../assets/vendors/owl-carousel/owl.carousel.min.css"
import "../assets/vendors/lightbox/simpleLightbox.css"
import "../assets/vendors/nice-select/css/nice-select.css"
import "../assets/vendors/animate-css/animate.css"
import "../assets/vendors/jquery-ui/jquery-ui.css"
import "../assets/css/style.css"
import "../assets/css/responsive.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import "../assets/js/jquery-3.2.1.min.js"
// import "../assets/js/popper.js"
// import "../assets/js/bootstrap.min"
// import "../assets/vendors/lightbox/simpleLightbox.min"
// import "../assets/vendors/nice-select/js/jquery.nice-select.min"
// import "../assets/vendors/isotope/imagesloaded.pkgd.min"
// import "../assets/vendors/isotope/isotope-min"
// import "../assets/vendors/owl-carousel/owl.carousel.min"
// import "../assets/js/jquery.ajaxchimp.min"
// import "../assets/vendors/counter-up/jquery.waypoints.min"
// import "../assets/vendors/counter-up/jquery.counterup"
// import "../assets/js/mail-script"
// import "../assets/js/theme"





const Layout = ({children}) => {
  return (
     <>
           
        <Header/>

           {children}

           <ToastContainer />
        <Footer/>
     </>
  )
}

export default Layout