import {react} from "react"

const Address=()=>{
    return(
        <>  
        <h1>Address Informationa</h1>
        <div>
            <div>
                <label htmlFor="address">Street Address</label>
                <input type="text" name="address" id="address" />
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" />
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <input type="text" name="state" id="state" />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <label htmlFor="zip">zipCode</label>
                    <input type="number" name="zip" id="zip" />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Address;