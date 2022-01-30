function da_submit_button() {
    Username = document.getElementById('112').value
    Languages = document.getElementById('113').value
    Description = document.getElementById('114').value
  
    if (document.getElementById('114').value.length < 40){
      document.getElementById('Error-DescriptionCharactere').style.display = "block"
    } else {
      open(`https://usefull-api.herokuapp.com/WProfile/${Username}/${Languages}/${Description}`)
    }
  }