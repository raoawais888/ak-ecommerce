import Title from "../title/Title"

const Latestblog = () => {
  return (
    <>
          {/* <!--================ Start Blog Area =================--> */}
  <section className="blog-area section-gap">
    <div className="container">
     
     <Title title="latest blog" />

      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="thumb">
              <img className="img-fluid" src="img/b1.jpg" alt="" />
            </div>
            <div className="short_details">
              <div className="meta-top d-flex">
                <a href="#">By Admin</a>
                <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
              </div>
              <a className="d-block" href="single-blog.html">
                <h4>Ford clever bed stops your sleeping
                  partner hogging the whole</h4>
              </a>
              <div className="text-wrap">
                <p>
                  Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                  Forth.
                </p>
              </div>
              <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="thumb">
              <img className="img-fluid" src="img/b2.jpg" alt="" />
            </div>
            <div className="short_details">
              <div className="meta-top d-flex">
                <a href="#">By Admin</a>
                <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
              </div>
              <a className="d-block" href="single-blog.html">
                <h4>Ford clever bed stops your sleeping
                  partner hogging the whole</h4>
              </a>
              <div className="text-wrap">
                <p>
                  Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                  Forth.
                </p>
              </div>
              <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="thumb">
              <img className="img-fluid" src="img/b3.jpg" alt="" />
            </div>
            <div className="short_details">
              <div className="meta-top d-flex">
                <a href="#">By Admin</a>
                <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
              </div>
              <a className="d-block" href="single-blog.html">
                <h4>Ford clever bed stops your sleeping
                  partner hogging the whole</h4>
              </a>
              <div className="text-wrap">
                <p>
                  Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                  Forth.
                </p>
              </div>
              <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!--================ End Blog Area =================--> */}
    </>
  )
}

export default Latestblog