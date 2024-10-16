import React from 'react'

const OnBoarding = () => {

    return (

        <div className="">

            <form>

                <h1> Personal Details </h1>

                <div className="">

                    <label>Full Name</label>
                    <input 
                        required
                        type='text'
                        name='fullName'
                    />

                    <label>Date of Birth</label>
                    <input 
                        required
                        type='date'
                        name='fullName'
                    />

                    <label>Gender</label>
                    <select>

                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="others">others</option>

                    </select>

                    <label>Martial Status</label>
                    <select>

                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Separated">Separated</option>
                        <option value="Devorced">Devorced</option>


                    </select>

                    <label>Mobile Number</label>
                    <input 
                        required
                        type='number'
                        name='primaryNumber'
                        placeholder='Primary Number'
                    />

                    <input 
                        type='number'
                        name='secondaryNumber'
                        placeholder='Secondary Number'
                    />

                    <label>Email</label>
                    <input 
                        required
                        type='text'
                        name='personalEmail'
                        placeholder='Personal Email'
                    />
                
                    <input 
                        type='text'
                        name='professionalEmail'
                        placeholder='Professional Email'
                    />

                    <label>Residential Address</label>
                    <input 
                        required
                        type='text'
                        name='residentialAddress1'
                        placeholder='Permanent'
                    />
                
                    <input 
                        type='text'
                        name='residentialAddress2'
                        placeholder='Current'
                    />

                </div>

                <h1>Employement Details</h1>

                <div className="">

                    <label>Employee ID</label>
                    
                    <input 
                        disabled
                        type='text'
                        value={'2100520061'}
                    />

                    <label>Date of joining</label>
                    
                    <input 
                        disabled
                        type="date"
                        value="2023-10-05"
                    />

                    <label>Designation</label>
                    
                    <input 
                        disabled
                        type="text"
                        value="DevOps Engineer"
                    />

                    <label>Department</label>
                    
                    <input 
                        disabled
                        type="text"
                        value="Software Operations"
                    />

                    <label>Reporting Manager</label>
                    
                    <input 
                        disabled
                        type="text"
                        value="Gokul"
                    />

                    <label>Employement Type</label>
                    
                    <input 
                        disabled
                        type="text"
                        value="Full-Time"
                    />

                </div>

                <h1>Statutory & Financial Details</h1>

                <div className="">

                    <label>PAN Number</label>
                    
                    <input 
                        required
                        type="text"
                        name='panNumber'
                        placeholder='Enter your PAN Number'
                    />

                    <label>Aadhar Number</label>
                    
                    <input 
                        required
                        type="text"
                        name='aadhar'
                        placeholder='Enter your Aadhar Number'
                    />

                    <label>Bank Account Details</label>
                    
                    <input 
                        required
                        type="text"
                        name='bankName'
                        placeholder='Enter your Bank Name'
                    />

                    <input 
                        required
                        type="text"
                        name='accountNumber'
                        placeholder='Enter your Account Number'
                    />

                    <input 
                        required
                        type="text"
                        name='ifsc'
                        placeholder='Enter your IFSC Code'
                    />

                    <label> UAN Number </label>

                    <input 
                        type="text"
                        name='uanNumber'
                        placeholder='Enter your UAN Number'
                    />

                    <label> ESIC Number (if Applicable) </label>

                    <input 
                        type="text"
                        name='uanNumber'
                        placeholder='Enter your ESIC Number'
                    />

                </div>

                <h1> Emergency Contact Information</h1>

                <div className="">

                    <lable> Emergency Contact Name </lable>

                    <input 
                        required
                        type="text"
                        name='ifsc'
                        placeholder='Enter your IFSC Code'
                    />

                    <lable> Relationship to Employee </lable>

                    <select>

                        <option value="Parents">Parents</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Child">Child</option>
                        <option value="others"> Others </option>

                    </select>

                    <lable> Emergency Contact Number </lable>

                    <input 
                        required
                        type="number"
                        name='emergencyNumber'
                        placeholder='Enter your Emergency Number'
                    />

                </div>

                <h1> Educational Details </h1>

                <div className="">

                    <lable> Highest Education Qualification </lable>

                    <input 
                        required
                        type="text"
                        name='educationQualification'
                        placeholder='Enter your Highest Education Qualification'
                    />

                    <lable> Institute Name </lable>

                    <input 
                        required
                        type="text"
                        name='instituteName'
                        placeholder='Institution Name'
                    />

                    <label> Year Of Passing </label>

                    <input
                        required
                        type='number'
                        name='yearOfPassing'
                        placeholder='Year Of Passing'
                    />

                </div>

            </form>

        </div>

    )

}

export default OnBoarding