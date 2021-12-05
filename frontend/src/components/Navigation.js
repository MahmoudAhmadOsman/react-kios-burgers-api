import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <section className="main-navigation">
      <div class="ui fixed inverted menu">
        <div class="ui container">
          <a href="/" class="header item">
            <img class="logo" src="assets/images/favicon.ico" /> &nbsp;
            KIOS
          </a>
          <a href="/" class="item">
            Home
          </a>
          <a href="/" class="item">
            Burgers
          </a>
          <div class="ui simple dropdown item">
            Services <i class="dropdown icon"></i>
            <div class="menu">
              <a class="item" href="#">
               Burgers
              </a>
              <a class="item" href="#">
                Sandwitches
              </a>
              <div class="divider"></div>
              <div class="header">Drinks</div>
              <div class="item">
                <i class="dropdown icon"></i>
                Sweet drinks
                <div class="menu">
                  <a class="item" href="#">
                   Sweet Orion
                  </a>
                  <a class="item" href="#">
                    Sweet & Banana
                  </a>
                </div>
              </div>
              <a class="item" href="#">
                Oragan & Orio
              </a>
            </div>
          </div>
          <a href="/about" class="item">
            About
          </a>
          <a href="/" class="item">
            Contact
          </a>
          <div class="right item">
          <a href="#" class="ui inverted button">Log in</a>
          <a href="#" class="ui inverted button">Sign Up</a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
