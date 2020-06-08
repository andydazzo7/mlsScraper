import React from 'react'
import {Article} from './article'

export class TopList extends React.Component{
    render(){
        return(
            <div>
                <h2 className='title'>Here are some curated articles from today!</h2>
            {this.props.data.map(data=>{
               return <Article data={data}/>;
            })}
            </div>
        )
    }
}