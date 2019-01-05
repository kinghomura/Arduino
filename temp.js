function hello(){
  window.alert("hello!");
}

// function change(){
//   var num = 424
//   document.getElementById("temp").textContent=num
// }

function change(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "nowTemp.csv",true);
  xmlHttp.send(null);
  xmlHttp.onload = function(){
    var data = xmlHttp.responseText;
  }

  // document.getElementById("temp").textContent="gad"
  alert(data);

}
