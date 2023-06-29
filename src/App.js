import data from './components/Api.json';
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container'
 const App = () =>{
  console.log(data,'fff')

 
return(
 
  <>
 
  <h1 style={{textAlign:'center',boxShadow:'2px 5px,10px'}}><b>Weather Information</b></h1>
  <br></br>
  {/* <div style={{backgroundColor:'skyblue',}}> */}
  <div style={{display:'flex'}} >
  <Card style={{ width: '18rem',padding:'20px',marginLeft:'80px' ,boxShadow:'2px 5px '}}>
     
      <Card.Body>
      <div>City : {data.cities[0].name}</div>
    <div>Weather : {data.cities[0].weather}</div>
    <div>Temperature : {data.cities[0].temperature}</div>
    <div>Humidity : {data.cities[0].humidity}</div>
    <div>Wind Speed : {data.cities[0].wind_speed}</div>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem',padding:'20px',marginLeft:'80px' ,boxShadow:'2px 5px '}}>
     
      <Card.Body>
      <div>City:{data.cities[1].name}</div>
    <div>Weather:{data. cities[1].weather}</div>
    <div>Temperature:{data.cities[1].temperature}</div>
    <div>Humidity:{data.cities[1].humidity}</div>
    <div>Wind Speed:{data.cities[1].wind_speed}</div>
      </Card.Body>
    </Card>
   
    <Card style={{ width: '18rem',padding:'20px',marginLeft:'80px',boxShadow:'2px 5px ' }}>
     
      <Card.Body>
      <div>City : {data.cities[2].name}</div>
    <div>Weather : {data. cities[2].weather}</div>
    <div>Temperature : {data.cities[2].temperature}</div>
    <div>Humidity : {data.cities[2].humidity}</div>
    <div>Wind Speed : {data.cities[2].wind_speed}</div>
      </Card.Body>
    </Card>
 
    
    </div>
   
    
    
   
    {/* </div> */}
    
  </>
)
}

export default App