export default function Input({ label, id, error, ...props }) {
    return (
    < div className = "control no-margin" >
        {/* <label htmlFor="email">Email</label> */}
        <label htmlFor={id}>{label}</label>
        {/* <input id="email" type="email" name="email" onBlur={() => handleInputBlur('email')} onChange={(event) => handleInputChange('email', event.target.value)} value={enteredValues.email} /> */}
        <input id={id} {...props} />
        {/* <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div> */}
        <div className="control-error">{error && <p>{error}</p>}</div>
    </div >
 );   
}