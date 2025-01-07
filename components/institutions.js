import React from "react"
import Link from "next/link"
import NextImage from "./image"


const Institutions = ({ institutions }) => {
    return (

        <div className="container" >
            <div className="row" >
            {institutions.map((institution, i) => {
                return (
                <div key={i} className="col-md-6">

                    <Link key={i} href={`/institutions/${institution.attributes.slug}`}>
                    <a className="">
                        <div className="institution_box">
                            <div className="institution_box_image">
                                <NextImage  style={{width:'500px',height:'300px'}} image={institution.attributes.image} />
                            </div>
                            <div className="institution_box_title">
                            
                                <span>
                                    {institution.attributes.title}
                                </span>
                            </div>
                        </div>
                    </a>
                    </Link>
                    
                </div>
                )
            })}
            </div>
        </div>

    )
}

export default Institutions;
