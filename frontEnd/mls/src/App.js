import React from 'react';
import logo from './logo.svg';
import './App.css';
import api_conn from './api_conn'
import {ArticleList} from './components/articlelist';
export class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      team:'atlutd',
      articleTitles : []
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    this.setState({team:e.target.value})
    api_conn.getArts(e.target.value).then(result=>{
      console.log(result[0].title);
      this.setState({articleTitles: result})})
  }
  componentDidMount(){
    api_conn.getArts(this.state.team).then(result=>{
      console.log(result[0].title);
      this.setState({articleTitles: result})})
  }
  render(){
    return (
      <div className="App">
        <h1 className ='title'>Select Your Favorite Team, See the Latest Team News!</h1>
        <select className='picker 'onChange={this.handleChange}>
          <option value='atlutd'> Atlanta United</option>
          <option value='chicagofirefc'>Chicago Fire</option>
          <option value='fccincinnati'>FC Cincinatti</option>
          <option value='coloradorapids'>Colorado Rapids</option>
          <option value='columbuscrewsc'>Columbus Crew</option>
          <option value='fcdallas'>FC Dallas</option>
          <option value='chicagofirefc'>Chicago Fire</option>
          <option value='dcunited'>DC United</option>
          <option value='houstondynamo'>Houston Dynamo</option>
          <option value='lafc'>LA FC</option>
          <option value='lagalaxy'>LA Galaxy</option>
          <option value='intermiamicf'>Inter Miami CF</option>
          <option value='mnufc'>Minnesota United</option>
          <option value='houstondynamo'>Houston Dynamo</option>
          <option value='impactmontreal'>Montreal Impact (French)</option>
          <option value='nashvillesc'>Nashville SC</option>
          <option value='revolutionsoccer'>New England Revolution</option>
          <option value='nycfc'>NYC FC</option>
          <option value='newyorkredbulls'>New York Red Bulls</option>
          <option value='orlandocitysc'>Orlando City SC</option>
          <option value='philadelphiaunion'>Philadelphia Union</option>
          <option value='timbers'>Portland Timbers</option>
          <option value='rsl'>Real Salt Lake</option>
          <option value='sjearthquakes'>San Jose Earthquakes</option>
          <option value='soundersfc'>Seattle Sounders</option>
          <option value='https:torontofc'>Toronto FC</option>
          <option value='whitecapsfc'>Vancouver Whitecaps FC</option>

        </select>
        <ArticleList data={this.state.articleTitles}/>
      </div>
    );
  }
  
}

export default App;
