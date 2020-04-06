//updateClock by tayumpee
function updateClock() {
  var days = ["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];
  var months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
  var date = new Date();
  var dateString =
    (days[date.getDay()]) + " " +
    ("0" + date.getDate()).slice(-2) + " DE " +
    (months[date.getMonth()]) + " DE " +
    date.getFullYear() +" "+
    ("0" + date.getHours()).slice(-2) + ":" +
    ("0" + date.getMinutes()).slice(-2) + ":" +
    ("0" + date.getSeconds()).slice(-2);
  
  document.getElementById("time").innerHTML = dateString;
  setTimeout(updateClock, 1000);
}

window.onload = () => {
  updateClock();
  document.getElementById("form").onsubmit = function() {
    var search = document.getElementById("search");
    var query  = search.value;
    if (query.charAt(0) != "-" || query.charAt(2) != " ") {
      this.setAttribute("action", "https://www.google.com.mx/search?q=search");
      return true;
    }
    var command = query.charAt(1);
        query   = query.substring(3, query.length);
    if (command == "u") {
      window.location.assign("https://" + query);
      return false;
    }
    if (command == "h") {
      window.location.assign("http://" + query);
      return false;
    }
    if (command == "4") {
      window.location.assign("https://boards.4chan.org/" + query);
      return false;
    }
    if (command == "3") {
      query += " site:http://www.w3schools.com/";
      this.setAttribute("action", "https://www.google.com.mx/search?q=search");
      search.value = query;
      return true;
    }
    if (command == "g") {
      this.setAttribute("action", "https://www.google.com.mx/search?q=search");
      search.value = query;
      return true;
    }
    alert("command not found");
    return false;
  };
  
  document.getElementById("video").ontimeupdate = function() {
    if (this.currentTime >= 0) {
      this.style.marginLeft = "-20px"
    }
    if (this.currentTime > 0.6) {
      this.style.marginLeft = "50px"
    }
    if (this.currentTime > 1.2) {
      this.style.marginLeft = "130px"
    }
    if (this.currentTime > 1.7) {
      this.style.marginLeft = "100px"
    }
    if (this.currentTime > 2.4) {
      this.style.marginLeft = "-20px"
    }
    if (this.currentTime > 3.0) {
      this.style.marginLeft = "-210px"
    }
    if (this.currentTime > 3.8) {
      this.style.marginLeft = "50px"
    }
    if (this.currentTime > 4.4) {
      this.style.marginLeft = "100px"
    }
  }
  
}
