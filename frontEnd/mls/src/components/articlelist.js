import React from 'react'
import './list.css'
import {Article} from './article'
import Carousel from 'react-bootstrap/Carousel'
export class ArticleList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            {this.props.data.map(data=>{
               return <Article data={data}/>;
            })}
            </div>
        );
    }
}