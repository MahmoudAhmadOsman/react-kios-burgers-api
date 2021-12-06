import React from "react";

const LoginScreen = () => {
  return (
    <section className="login-container" style={{marginTop:"60px"}}>
      <div className="ui container">
      <div class="ui middle aligned center aligned grid">
  <div class="five wide column">
    <h2 class="ui teal image header">
      <img src="assets/images/favicon.ico" class="image" />
      {/* <div class="content">
        SIGN IN
      </div> */}
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address" />
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
        <div class="ui fluid large teal submit button">Login</div>
      </div>
 
      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default LoginScreen;
