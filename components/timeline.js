import React from "react";

const Timeline = ({elements}) => {
    //console.log(elements);
    const timeline_elements = elements[0].attributes.timeline_elements;
    const title = elements[0].attributes.title
    return (
        <div className="bg-gradient_solid">
            <div className="container">
                <div className="section-header">
                    <h2>{title}</h2>
                
                </div>
                <div className="steps">
                    {timeline_elements.map((element,i) => {
                        return(
                            <div key={i} className="steps-container">
                                <div className="content">
                                    <h2>{element.title}</h2>
                                    <p>{element.description}</p>
                                </div>
                                <i className="step-line"></i>
                                <div className="date"></div>
                            </div>
                        )
                    
                    })} 
                </div>
            </div>
        </div>
  )
};

export default Timeline;