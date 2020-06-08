import React from 'react'
import './list.css'

export class Article extends React.Component{
    render(){
        return(
            <div className ='art'>
                <a href={this.props.data.link} className='thumbnail'><img className='thumbnail'src={this.props.data.image}/></a>
                <a href={this.props.data.link} className='title'><h3 className='title'>{this.props.data.title}</h3></a>
                <p className='release'>{this.props.data.release}</p>
            </div>
        )
    }
}