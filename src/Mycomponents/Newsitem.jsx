import React from 'react'
import { Card,  } from 'react-bootstrap'
import "./App.css"
 

const Newsitem =(props)=> {
   
    let { title,  desc, url, urlimg, author, date,source } = props
    return (
      <div style={{
        display: "flex",
        flex: "1 0 auto",
        justifyContent: "left",

      }}>
        <Card id="mycards" >
          <Card.Img variant="top" src={urlimg} /> <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {desc}
            </Card.Text>
            <p class="card-text"><small class="text-muted">Posted by {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a target="_blank" href={url} className="btn btn-dark">Read more</a>
          </Card.Body>
        </Card>
      </div>
    )
  }

export default Newsitem
