import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <section className="main-navigation">
      <div class="ui fixed inverted menu">
        <div class="ui container">
          <Link to="/" class="header item">
            <img class="logo" src="assets/images/favicon.ico" /> &nbsp; KIOS
          </Link>
          <Link to="/" class="item">
            Home
          </Link>
          <Link to="/" class="item">
            Burgers
          </Link>
          <div class="ui simple dropdown item">
            Services <i class="dropdown icon"></i>
            <div class="menu">
              <Link class="item" to="#">
                Burgers
              </Link>
              <Link class="item" to="#">
                Sandwitches
              </Link>
              <div class="divider"></div>
              <div class="header">Drinks</div>
              <div class="item">
                <i class="dropdown icon"></i>
                Sweet drinks
                <div class="menu">
                  <Link class="item" to="#">
                    Sweet Orion
                  </Link>
                  <Link class="item" to="#">
                    Sweet & Banana
                  </Link>
                </div>
              </div>
              <Link class="item" to="#">
                Oragan & Orio
              </Link>
            </div>
          </div>
          <Link to="/about" class="item">
            About
          </Link>
          <Link to="/" class="item">
            Contact
          </Link>
          <div class="right item">
            <Link to="/login" class="ui inverted button">
              Log in
            </Link>
            <Link to="#" class="ui inverted button">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
