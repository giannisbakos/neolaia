import React from "react"
import Link from "next/link"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const Gallery = ({ photos }) => {
  //console.log(photos);
  

  return (
    <div className="container-fluid no-padding more-photos">
      {photos && photos.data.length &&  
      <div className="row">          
        <div className="col-md-12">
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                {photos.data.map((photo, i) => {
                    return (

                        <img style={{padding:'5px'}} key={`photo${i}`} src={`https://ndrico2010.ovh${photo.attributes.url}`}  />

                    )
                    })}
                </Masonry>
        </ResponsiveMasonry>
        </div>
      </div>  
      }
       
        
    </div>
  )
}

export default Gallery;