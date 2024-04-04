import React from 'react'

const Footer = () => {

    const footerStyle = {
        display: "block",
        position: "absolute",
        bottom: "0px",
        width: "100%",
    }

  return(
    // <!-- Footer -->
	<div className="navbar navbar-expand-lg navbar-light" style={footerStyle}>
        <div className="text-center d-lg-none w-100">
            <button type="button" className="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
                <i className="icon-unfold mr-2"></i>
                Footer
            </button>
        </div>

        <div className="navbar-collapse collapse" id="navbar-footer">
            <span className="navbar-text">
                &copy; 2024. Powered By <a href="https://www.deboxglobal.com/" ><img src="https://shivdvn.com/staging/global_assets/images/debox-logo.png" alt="footerlogo" style={{width: "50px", marginLeft: "5px"}} /></a>
            </span>

            <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item"><a href="https://www.deboxglobal.com/" className="navbar-nav-link font-weight-semibold"><span className="text-pink-400"><i className="icon-lifebuoy mr-2"></i> Support</span></a></li>
            </ul>
        </div>
    </div>
    //<!-- /footer -->
  )
}

export default Footer