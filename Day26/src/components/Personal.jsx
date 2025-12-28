import {react} from "react"

const Personal=()=>{
    return(
        <>
        <h1>Personal Informationa</h1>
        <div>
            <div className="flex justify-center items-center">
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" name="phone" id="phone" />
                </div>
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" name="dob" id="dob" />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender">
                        <option value="">--Select Gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
        </div>
        </>
    )
}
export default Personal;