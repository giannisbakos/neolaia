import React from "react"
import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getStrapiMedia } from "../lib/media";

const Testimonials = ({ testimonials }) => {
    
  const testimonialElements = testimonials[0].attributes.testimonials;  

  return (
    <div className="col-md-12">
        <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={10000}>
            {testimonialElements.map((testimonial,i) => {
              
              return (
                <div key={i} className="testimonial_element">
                    <p className="testimonial_element_description">
                        {testimonial.description}
                    </p>
                    <p className="testimonial_element_source">
                        {testimonial.source}
                    </p>
                </div>
              )
            })}
        </Carousel>
    </div>
  )
}

export default Testimonials;