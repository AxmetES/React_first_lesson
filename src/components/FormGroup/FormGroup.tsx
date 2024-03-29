import React from "react";

interface FormGroupProps {
    label: string;
    name: string;
    placeholder: string;
}

export const FormGroup: React.FC<FormGroupProps> = (
    {label, name, placeholder}) => {
    return(
        <div className="controlGroup">
            <label>
                {label}
                <input name={name} type="text" placeholder={placeholder}/>
            </label>
        </div>
    );
}