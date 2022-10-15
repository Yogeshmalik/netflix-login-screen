import React from 'react'

function Form() {

    function blurFunction() {
        document.getElementById("email").style.borderBottom = '2px solid #e87c03';
        document.getElementById("pass").style.borderBottom = '2px solid #e87c03';
        document.getElementById("errorMsgEmail").innerHTML = "Please enter a valid email address or phone number.";
        document.getElementById("errorMsgPass").innerHTML = "Your password must contain between 4 and 60 characters.";
    }

    function focusFunction() {
        // document.getElementById("myInput").style.background = "#333"
    }

    return (
        <div className='Form'>
            <form>
                <h1 className='hero'>Sign In</h1>
                <div className='inputBox error'>
                    <input type="text" id='email' class="inputText error" required onFocus={focusFunction} onBlur={blurFunction} />
                    <span className="floating-label">Email or phone number</span>
                    <span id='errorMsgEmail' onBlur={blurFunction} className="errorMsg"></span>
                </div>
                <div className='inputBox error'>
                    <input id='pass' onFocus={focusFunction} onBlur={blurFunction} type="text" className="inputText error" required />
                    <span className="floating-label">Password</span>
                    <span id='errorMsgPass' onBlur={blurFunction} className="errorMsg"></span>
                </div>
                <button type="submit">Sign In</button><br />
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
