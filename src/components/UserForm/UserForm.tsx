import React  from "react";
import './UserForm.css'
import {FormGroup} from "../FormGroup/FormGroup.tsx";

export const  UserForm: React.FC = () => {
    return (
            <>
        <h1>User Application</h1>
        <form id="userForm">
            <div className="formGroup">
                <FormGroup label={"First name"} name={"firstName"} placeholder={"First name"}/>
            </div>

            <div className="formGroup">
                <FormGroup label={"Last name"} name={"lastName"} placeholder={"Last name"}/>
            </div>

            <div className="formGroup">
                <FormGroup label={"Age"} name={"age"} placeholder={"Age"}/>
            </div>

            <div className="formGroup">
                <FormGroup label={"Salary"} name={"salary"} placeholder={"Salary"}/>
            </div>
            <div className="formGroup">
                <div className="controlGroup">
                    <button className="submitButton" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </>
    );
}