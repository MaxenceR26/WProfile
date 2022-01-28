function changeColorBackDark() {
    document.getElementById('SetupBody').style.backgroundColor="#2B2B2B"
    document.getElementById('end-svg').style.fill="#2B2B2B"
    document.getElementById('second-svg').style.fill="#444444"
    document.getElementById('first-svg').style.fill="#5B5B5B"
    // A retirer, a modifier en une ligne 
    document.getElementById('112').style.backgroundColor="#4e4e4e"
    document.getElementById('113').style.backgroundColor="#4e4e4e"
    document.getElementById('114').style.backgroundColor="#4e4e4e"
    //
    for (var i=0;i<document.getElementsByName('WprofTitle').length;i++){
      document.getElementsByName('WprofTitle')[i].style.color="rgba(12, 12, 12, 1)"
    }
    for (var i=0;i<document.getElementsByName('WprofTitleFAT').length;i++){
      document.getElementsByName('WprofTitleFAT')[i].style.color="#2B2B2B"
    }
    document.getElementById('footer').style.backgroundColor="rgba(12, 12, 12, 1)"
    document.getElementById('team').style.backgroundColor="#2B2B2B"
    document.getElementById('light_ii').style.display="none"
    document.getElementById('light_ii-fill').style.display="block"
    document.getElementById('light_ii-fill').style.backgroundColor="#2B2B2B"
    document.getElementById('hero').style.background="rgba(12, 12, 12, 1)"
    for (var i=0;i<document.getElementsByName('white').length;i++){
      document.getElementsByName('white')[i].style.color="#fff"
    }
    for (var i=0;i<document.getElementsByName('text-above').length;i++){
      document.getElementsByName('text-above')[i].style.color="#fff"
    }
    document.getElementById('who-are-we').style.borderColor="rgba(12, 12, 12, 1)"
    document.getElementById('who-are-we').style.backgroundColor="#fff"

    document.getElementById('mentionlgl').style.backgroundColor="rgba(12, 12, 12, 1)"

  }

  function changeColorBackWhite() {
    document.getElementById('SetupBody').style.backgroundColor="#fff"
    document.getElementById('hero').style.backgroundImage="linear-gradient(0deg, #2a2c39 0%, #33364a 100%)"
    document.getElementById('end-svg').style.fill="#fff"
    document.getElementById('second-svg').style.fill="rgba(255,255,255, .2)"
    document.getElementById('first-svg').style.fill="rgba(255,255,255, .1)"
    for (var i=0;i<document.getElementsByName('WprofTitle').length;i++){
      document.getElementsByName('WprofTitle')[i].style.color="rgb(162, 111, 255)"
    }
    for (var i=0;i<document.getElementsByName('text-above').length;i++){
      document.getElementsByName('text-above')[i].style.color="#444444"
    }
    for (var i=0;i<document.getElementsByName('white').length;i++){
      document.getElementsByName('white')[i].style.color="#2a2c39"
    }
    document.getElementById('112').style.backgroundColor="#fff"
    document.getElementById('113').style.backgroundColor="#fff"
    document.getElementById('114').style.backgroundColor="#fff"
    document.getElementById('footer').style.backgroundColor="#14151c"
    document.getElementById('team').style.backgroundColor="#fff"
    document.getElementById('light_ii').style.display="block"
    document.getElementById('light_ii-fill').style.display="none"

    for (var i=0;i<document.getElementsByName('WprofTitle').length;i++){
      document.getElementsByName('WprofTitle')[i].style.color="rgb(162, 111, 255)"
    }
    for (var i=0;i<document.getElementsByName('WprofTitleFAT').length;i++){
      document.getElementsByName('WprofTitleFAT')[i].style.color="rgb(162, 111, 255)"
    }

    document.getElementById('who-are-we').style.borderColor=""
    document.getElementById('who-are-we').style.backgroundColor=""

    document.getElementById('mentionlgl').style.backgroundColor="#14151c"
  }