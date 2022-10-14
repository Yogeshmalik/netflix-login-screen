import React, { useState } from 'react'

function Form() {

    const [errMsg, setErrorMessage] = useState('');
    const handleError = () => {
        setErrorMessage("Example error message!")
    }
    return (
        <div className='Form'>
            <form>
                <h1 className='hero'>Sign In</h1>
                <div className='inputBox error'>
                    {<input /> == !"" ? <input onError={handleError} type="text" className="inputText error" required /> : <div className='inputBox'><input onError={handleError} type="text" className="inputText error" required /><div className="errorMsg">Please enter a valid email address or phone number.</div></div>}
                    {/* <input onClick={handleError} type="text" class="inputText error" required /> */}
                    <span className="floating-label">Email or phone number</span>
                </div>
                <div className='inputBox error'>
                    <input onClick={handleError} type="text" className="inputText error" required />
                    <span className="floating-label">Password</span>
                    {/* <div class="errorMsg">Your password must contain between 4 and 60 characters.</div> */}
                </div>
                {/* <input type='email' placeholder='Email or phone number' required /><br />
                <input type='password' placeholder='Password' required /><br /> */}
                <button>Sign In</button><br />
                <div className='remem-help'>
                    <label className='remember'>
                        <input type='checkbox' />
                        <span className='checkmark'></span>Remember me
                    </label>
                    <p><a href="#">Need help?</a></p>
                </div>
            </form>
            <div className='form-bottom'>
                <div className='signupnow'>
                    <p>New to Netflix?<a href="#">Sign up now</a></p>
                </div>
                <div className='recaptcha'>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></p>
                </div>
            </div>
        </div>
    )
}

export default Form