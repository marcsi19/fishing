import React from 'react'
import {Link} from 'react-router-dom'

const GalleryList = props => {
  const gallery = props.gallery || []
  console.log('gallerylist', gallery)
  return (
    <div className="gallery-container">
      <h2>Galéria</h2>

      <div className="gallery-pics">
        <div className="gallery-pics__item">
          {gallery
            .filter(pics => {
              if (pics.category === 'Galeria') {
                return true
              }
            })
            .sort((a, b) => {
              return a.id - b.id
            })
            .map(pic => {
              return (
                <div className="wrapper" key={pic.id}>
                  <Link to={`/gallery/${pic.id}`}>
                    <div className="wrapper_inner">
                      <img
                        className="gallery-pics__item-image"
                        src={pic.imageUrl}
                      />

                      <div className="gallery-pics__item-title">
                        {pic.title}
                      </div>
                      <div>
                        {' '}
                        <a
                          href={pic.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="single-pic-back"
                        >
                          {pic.link ? 'Bovebben' : ''}
                        </a>
                      </div>
                      {/* <div className="gallery-pics__item-desc">
                        {pic.description}
                      </div> */}
                    </div>
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default GalleryList
