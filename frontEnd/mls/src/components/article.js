import React from 'react'
import './list.css'
import Card from 'react-bootstrap/Card'

export class Article extends React.Component{
    render(){
        return(
            <div  style={{display:'inline-block'}}>
                <Card style={{backgroundImage:'linear-gradient(gray, white)', width: 450, height:230, margin:30, borderRadius:'10px'}}>
                    <Card.Body>
                <a href={this.props.data.link} className='thumbnail'><img className='thumbnail'src={this.props.data.image}/></a>
                <a href={this.props.data.link} className='title2'><h3 className='title2'>{this.props.data.title}</h3></a>
                <p className='release'>{this.props.data.release}</p>
                </Card.Body>
                </Card>
            </div>
        )
    }
}