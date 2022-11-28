import React from "react";

function Formulier({type, name, label, value, onChange}) {
    return (
        <>
            <label htmlFor={`${name}`}>{label}</label>
            <input
                name={`${name}`}
                id={`${name}`}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
}
export default Formulier;