import {react} from "react"

const Review=()=>{
    return(
        <>
            <h1>Review Informationa</h1>
            <div>
                <div className="flex justify-center items-center">

                <div>
                    <h1>Personal Information</h1>
                    <div>
                        <p>Name:{}</p>
                        <p>Email:{}</p>
                        <p>Phone:{}</p>
                        <p>DOB:{}</p>
                        <p>Gender:{}</p>
                    </div>
                </div>
                <div>
                    <h1>Address</h1>
                    <div>
                        <p>Address:{}</p>
                        <p>City:{}</p>
                        <p>State:{}</p>
                        <p>Zip:{}</p>
                        <p>Country:{}</p>
                    </div>
                </div>
                </div>
                    <div>
                        <h1>Additional Information</h1>
                        <div>
                            <p>Occupation:{}</p>
                        <p>Website:{}</p>
                        <p>Emergenecy Contact:{}</p>
                        <p>Company:{}</p>
                        <p>LinkedIn:{}</p>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Review;