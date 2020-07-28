import React from 'react'
import {Article} from './article'
import Carousel from 'react-bootstrap/Carousel'
export class TopList extends React.Component{
    render(){
        return(
            <div style={{alignItems:'center' , alignContent:'center', textAlign:'center',}}>
                <h2 style={{marginBottom: 50}}className='title'>Here are some curated articles from today!</h2>
                <Carousel style={{width:800, left:'auto', right: 'auto', display:'block', margin:'auto', marginBottom:50,}}> {this.props.data.map(data=>{
                    return (<Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={data.image}
                      alt={'Mls player'}
                    />
                    <Carousel.Caption style={{backgroundColor:'rgba(255,255,255, 0.5)', borderRadius:'10px', height: '100px'}}>
                      <a style={{textDecoration:'none', color:'black',}} href={data.link}><h3 style={{fontSize:'19px'}}>{data.title}</h3></a>
                      <p style={{color:'black', fontSize:'12px'}}>{data.release}</p>
                    </Carousel.Caption>
                  </Carousel.Item>)
               //return <Article data={data}/>;
            })}</Carousel>
           
            </div>
        )
    }
}