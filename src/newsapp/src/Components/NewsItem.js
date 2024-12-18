import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, description,imageurl,newsUrl,author,date,source}=this.props;
    return (
      <>
      <div>
        <div className="card my-2 mx-2" style={{width: "18rem"}}>
             <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" 
             style={{ left: '50%', zIndex: 1, position: 'relative' }}>{source}
             </span>
                
            <img src={!imageurl?"https://securityaffairs.com/wp-content/uploads/2013/12/Cyber-Security-2.jpg":imageurl}/>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author || "Unknown"} on {date ? new Date(date).toGMTString() : "Unknown Date"}</small></p>
                 <a rel="noreferrer" href={newsUrl}target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
            
        </div>
        
      </div>
      </>
    )
  }
}

export default NewsItem
