

 export function getTimeDate() { 
    componentDidMount = () => {
        fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=9VENWSTCNAZR&format=json&by=zone&zone=Asia/Singapore', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              data: responseJson
           })
        })
        .catch((error) => {
           console.error(error);
        });
     }
 }