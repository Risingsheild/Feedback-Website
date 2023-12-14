import { useState } from "react";

function FeedbackForm() {
    const [subject, setSubject] = useState('')
    const [feedback, setFeedback] = useState('')


    function handleSubject(e) {
        setSubject(e.target.value)
    }

    function handleFeedback(e) {
        setFeedback(e.target.value)
    }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     const feedbackemail = {
    //         subject: subject,
    //         feedback: feedback
    //     }
    // }

    return (
        <div>
            <form className="form">
                <label style={{ fontWeight: "bolder", margin: 15 }}> Subject of Concern </label> <br></br>
                <select className="options" onChange={handleSubject} value={subject}>
                    <option value=''>Please choose one of the following...</option>
                    <option value='Accounting'> Accounting Issue</option>
                    <option value='Ethics'> Ethics Issue</option>
                    <option value='Human Resources'> HR Issue</option>
                    <option value='Customers/Suppliers'> Customer or Suppliers Issue</option>
                    <option value='Legal'> Legal Issue </option>
                    <option value='Other'> Other Issue </option>
                </select>
                <br></br>
                <br></br>
                <label style={{ fontWeight: "bolder", margin: 20 }}> Feedback Field <br></br><span style={{ fontSize: 10, margin: 20, fontStyle: "italic" }}>(2000 Character Limit)</span>
                </label>

                <textarea maxLength='2000' className='textfield' value={feedback} type="text" id='text' onChange={handleFeedback} placeholder="
                        (Please provide as much information as possible
                        about the circumstances, including the names, dates, locations and events
                        giving rise to your report, and any other witnesses to the conduct you are
                        reporting)"
                />
            </form>
            <p style={{ textAlign: "center", fontStyle: "italic" }}>
                You may, <span style={{ fontWeight: 'bold' }}>but you are not required to,</span>
                provide your contact information, but if you do not provide contact
                information, we may be unable to contact you to provide an update or resolution
                regarding the matter or to seek additional information. Any and all information
                you provide, including your report and your name and contact information, will
                be kept confidential to the extent possible under the circumstances.
            </p>
            <div className="buttons-group" style={{ alignItems: "center" }}>
                <button>Submit Form Anonymously</button>
                <button>Contact Form</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default FeedbackForm;