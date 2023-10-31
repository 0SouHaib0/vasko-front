
export function Navbar(){
    return(
        <div>
              <nav>
           
         <div class="logo">
            Vasco De Gama
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fa fa-bars"></i>
         </label>
         <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Feedback</a></li>
         </ul>
      </nav>
        </div>
    );
}