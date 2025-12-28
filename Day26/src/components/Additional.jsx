import {react} from "react"

const Additional=()=>{
    return(
        <>  
            <h1>Additional Informationa</h1>
            <div>
                <div className="flex justify-center items-center">
                    <div>
                        <label htmlFor="occupation">Occupation</label>
                        <input type="text" name="occupation" id="occupation" />
                    </div>
                    <div>
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" id="company" />
                    </div>
                </div>
                <div>
                    <label htmlFor="website">Website</label>
                    <input type="url" name="website" id="website" />
                </div>
                <div>
                    <label htmlFor="linkedin">Linkedin</label>
                    <input type="url" name="linkedin" id="linkedin" />
                </div>
                <div>
                    <label htmlFor="emecontact">Emergenecy Contact</label>
                    <input type="number" name="emecontact" id="emecontact" />
                </div>
            </div>
        </>
    )
}
export default Additional;