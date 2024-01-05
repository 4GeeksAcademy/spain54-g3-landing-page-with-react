import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Card =() => {
return (
  <div className="container d-flex justify-content-center">
    <div className="row">
      <div className="col mx-2 mt-3">
      <div className="card" style={{width: '18rem'}}>
  <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-social.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Bootstrap <strong>5</strong></h5>
    <p className="card-text">Bootstrap is a free front-end framework, with the purpose of making web development faster and easier.</p>
    <a href="https://getbootstrap.com/" target="blank" className="btn btn-primary">Get Bootstrap <strong>5</strong></a>
</div>
      </div>
    </div>
      <div className="col mx-2 mt-3">
      <div className="card" style={{width: '18rem'}}>
  <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Javascript</h5>
    <p className="card-text">JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive.</p>
    <a href="https://4geeksacademy.com/es" target="blank" className="btn btn-warning">Learn Javascript</a>
</div>
      </div>
    </div>
      <div className="col mx-2 mt-3">
      <div className="card" style={{width: '18rem'}}>
  <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">React <strong>JS</strong></h5>
    <p className="card-text">React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com.</p>
    <a href="https://4geeksacademy.com/es" target="blank" className="btn btn-info">Learn React <strong>JS</strong> </a>
</div>
</div>
      </div>
    </div>
  </div>
	
 )
} 

