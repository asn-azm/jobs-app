import { useState } from "react"
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const EditJobPage = ({ updateJobSubmit }) => {
    const job = useLoaderData();
    const [title, setTitle] = useState(job.title);
    const [type, setType] = useState(job.type);
    const [location, setLocation] = useState(job.location);
    const [description, setDescription] = useState(job.description);
    const [salary, setSalary] = useState(job.salary);
    const [companyName, setCompanyName] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
    const [contactPhone, setContactPhone] = useState(job.company.contactPhone);
    const navigate = useNavigate();
    const { id } = useParams();

    const submitForm = (e) => {
        e.preventDefault();
        const updatedJob = {
            id,
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone,
            },
        };

        updateJobSubmit(updatedJob);
        toast.success('Job updated Successfully!');
        return navigate('/jobs');

    }
    return (
        <section className="form-section">
            {/* <div className="form-container"> */}
            <form onSubmit={submitForm} className="form-container">
                <div className="form-left">
                    {/* Left Form Section */}
                    <div className="form-divs">
                        <label htmlFor="type" style={{ fontWeight: 600 }}>Job Type</label>
                        <select
                            id="type"
                            name="type"
                            required
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="form-inputs"
                        >
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Remote">Remote</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>
                    <div className="form-divs">
                        <label style={{ fontWeight: 600 }}>Job Listing Name</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="eg. Beautiful Apartment In Miami"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-inputs"
                        />
                    </div>
                    <div className="form-divs">
                        <label htmlFor="description" style={{ fontWeight: 600 }}>Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            placeholder="Add any job duties, expectations, requirements, etc"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-inputs"
                        ></textarea>
                    </div>
                    <div className="form-divs">
                        <label htmlFor="salary" style={{ fontWeight: 600 }}>Salary</label>
                        <select
                            id="salary"
                            name="salary"
                            required
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            className="form-inputs"
                        >
                            <option value='Under $50K'>Under $50K</option>
                            <option value='$50K - 60K'>$50K - $60K</option>
                            <option value='$60K - 70K'>$60K - $70K</option>
                            <option value='$70K - 80K'>$70K - $80K</option>
                            <option value='$80K - 90K'>$80K - $90K</option>
                            <option value='$90K - 100K'>$90K - $100K</option>
                            <option value='$100K - 125K'>$100K - $125K</option>
                            <option value='$125K - 150K'>$125K - $150K</option>
                            <option value='$150K - 175K'>$150K - $175K</option>
                            <option value='$175K - 200K'>$175K - $200K</option>
                            <option value='Over $200K'>Over $200K</option>
                        </select>
                    </div>
                    <div className="form-divs">
                        <label style={{ fontWeight: 600 }}>Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Company Location"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="form-inputs"
                        />
                    </div>
                </div>

                <div className="form-right">
                    {/* Right Form Section */}
                    <h3>Company Info</h3>

                    <div className="form-divs">
                        <label htmlFor="company" style={{ fontWeight: 600 }}>Company Name</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Company Name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="form-inputs"
                        />
                    </div>
                    <div className="form-divs">
                        <label htmlFor="company_description" style={{ fontWeight: 600 }}>Company Description</label>
                        <textarea
                            id="company_description"
                            name="company_description"
                            rows="4"
                            placeholder="What does your company do?"
                            value={companyDescription}
                            onChange={(e) => setCompanyDescription(e.target.value)}
                            className="form-inputs"
                        ></textarea>
                    </div>
                    <div className="form-divs">
                        <label htmlFor="contact_email" style={{ fontWeight: 600 }}>Contact Email</label>
                        <input
                            type="email"
                            id="contact_email"
                            name="contact_email"
                            placeholder="Email address for applicants"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="form-inputs"
                        />
                    </div>
                    <div className="form-divs">
                        <label htmlFor="contact_phone" style={{ fontWeight: 600 }}>Contact Phone</label>
                        <input
                            type="tel"
                            id="contact_phone"
                            name="contact_phone"
                            placeholder="Optional phone for applicants"
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            className="form-inputs"
                        />
                    </div>
                </div>

            </form>
            {/* </div> */}
            <div className="form-button">
                <button type="submit" className="submit-button" onClick={submitForm}>Add Job</button>
            </div>
        </section>
    )
}

EditJobPage.propTypes = {
    updateJobSubmit: PropTypes.func.isRequired
}

export default EditJobPage