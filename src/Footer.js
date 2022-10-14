import React from 'react';

function Footer() {
    return (
        <footer className='Footer'>
            <div className="divider"></div>
            <div className='wrapper'>
                <div className='call'>
                    <p>Questions? Call<a href="">000-800-040-1843</a></p>
                </div>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                    <li><a href="#">Corporate Information</a></li>
                </ul>
                <div className='lang-cont'>
                    <label id='lang' name='lang'>
                        <img className='globe'

                            htmlFor='lang'
                            height="45px"
                            src="https://img.icons8.com/ios-filled/344/geography.png" />
                        <select htmlFor='lang' className='lang'>Select Language
                            <option>English</option>
                            <option>हिन्दी</option>
                        </select>
                    </label>
                </div>
            </div>
        </footer>
    )
}

export default Footer