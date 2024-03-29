import React  from "react";
import './UserForm.css'

export const  Control: React.FC = () => {
    return (
        <>
            <section id="login">
                <div id="login-img">
                    <img id="login-pg-img" src="./Assets/login_pg_img.svg"/>
                </div>
                <div id="login-content">
                    <h2>Login your Account</h2>
                    <div>
                        <h3>Email</h3>
                        <input type="email" id="login-email" placeholder="Enter your Email here"/>
                        <p className="login-field" id="login-email-field">Please, fill this field</p>
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type="password" id="login-password" placeholder="Enter your Password here"/>
                        <p className="login-field" id="login-password-field">Please, fill this field</p>
                    </div>
                    <p className="login-field" id="login-error">Wrong login or password</p>
                    <button id="login-btn" onClick={#login}>Login Here</button>
                    <p className="or">- OR -</p>
                    <p className="acc">Create an account? <a href="#sign-up">Sign-Up</a></p>
                </div>
            </section>

            <section id="sign-up">
                <div id="sign-up-content">
                    <h2>Create your Account</h2>
                    <div>
                        <h3>Name</h3>
                        <input type="text" id="name" placeholder="Enter your Name here"/>
                        <p className="signup-field" id="signup-name-field">Please, fill this field</p>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="email" id="sign-up-email" placeholder="Enter your Email here"/>
                        <p className="signup-field" id="signup-email-field">Please, fill this field</p>
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type="password" id="sign-up-password" placeholder="Enter your Password here"/>
                        <p className="signup-field" id="signup-password-field">Please, fill this field</p>
                    </div>
                    <div id="age-gender">
                        <div id="age-info">
                            <h3>Age</h3>
                            <input type="text" id="age" placeholder=18/>
                            <p className="signup-field" id="age-field">Please, fill this field</p>
                        </div>
                        <div id="gender-info">
                            <h3>Gender</h3>
                            <div className="male-female">
                                <input id="gender-male" name="gender" type="radio" value="male" checked/>
                                    <label htmlFor="male">Male</label>
                                    <input id="gender-female" name="gender" type="radio" value="female"/>
                                    <label htmlFor="female">Female</label>
                            </div>
                        </div>
                    </div>
                    <button id="sign-up-btn" onClick="signup()">Sign-up</button>
                    <p className="or">- OR -</p>
                    <p className="acc">Already have an account?<a href="#login">Login</a></p>
                </div>

                <div id="sign-up-img">
                    <img id="sign-up-pg-img" src="./Assets/sign_up_pg_img.svg">/></div>
            </section>
        </>
    );
}