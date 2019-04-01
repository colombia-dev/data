window.addEventListener('load', function() {
  var webAuth = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: AUTH0_CALLBACK_URL,
    responseType: 'token id_token',
    scope: 'openid',
    leeway: 60
  });

  // buttons and event listeners
  var loginBtn = document.getElementById('authenticate-btn');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

  function handleAuthentication() {
    webAuth.parseHash(function(err, authResult) {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        webAuth.client.userInfo(authResult.accessToken, function(err, user) {
          console.log(user);
          var userIdHash = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(user.sub));
          window.location = "https://docs.google.com/forms/d/e/1FAIpQLSfyPv1g-QLSa2bD7x0Zs_KcFcFhk0Fz_zVyVzDcqqP101LDog/viewform?usp=pp_url&entry.1468836185="+userIdHash;
        });
      } else if (err) {
        console.log(err);
      }
    });
  }

  handleAuthentication();
});
