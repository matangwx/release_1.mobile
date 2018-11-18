export function getDateTimeFromApi() {

  return fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=9VENWSTCNAZR&format=json&by=zone&zone=Asia/Singapore')
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson.formatted;
  })
  .catch((error) => {
    console.error(error);
  });

}


/*
  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }
  
    if (request.status === 200) {
      console.log('success', request.responseText);
      const {formatted} = JSON.parse(request.responseText);
      var timeNDate = formatted.split(" ");
      var time = timeNDate[0];
      var date = timeNDate[1];
      alert("Time: "+time+"\nDate: "+date)
    } else {
      console.warn('error');
    }
  };

  request.open('GET', '');
  request.send();
  */