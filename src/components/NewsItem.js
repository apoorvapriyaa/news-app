import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, time, source } = this.props
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '90%', zIndex: '1' }}>
                        {source}
                    </span>
                    {imgUrl && <img src={imgUrl} className="card-img-top" alt="..." />}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? 'Unknown' : author} at {new Date(time).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-dark">
                            Read More
                        </a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem