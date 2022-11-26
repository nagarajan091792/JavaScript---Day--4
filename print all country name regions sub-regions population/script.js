const xhr = new  XMLHttpRequest();
  xhr.open("GET","https://restcountries.com/v3.1/all");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = function displayResult() {
    const countries = xhr.response;
    for (var i=0; i<countries.length; i++){
     
    console.log("Country Name : " + countries[i].name.common + ", Region : " + countries[i].region + ", Sub Region : " + countries[i].subregion + ", Populations : " + countries[i].population);
    }
   
    
    
    
    
  };