
export function Navbar(){
    return(
        <div>
              <nav>
           
         <div className="logo">
            Vasco De Gama
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" className="menu-btn">
         <i className="fa fa-bars"></i>
         </label>
         <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Feedback</a></li>
         </ul>
      </nav>
        </div>
    );
}