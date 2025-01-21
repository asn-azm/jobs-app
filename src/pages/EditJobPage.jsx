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
    const {id} = useParams();

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
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '86%', backgroundColor: '#e8f4fa' }}>
            <div style={{
                borderRadius: '15px', // Rounded corners
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow effect 
                backgroundColor: 'white',
                minWidth: '25%'
            }} >
                <div style={{ paddingBottom: '10px' }}>
                    <form onSubmit={submitForm}>
                        <h2 style={{ textAlign: 'center' }}>Add Job</h2>
                        <div className="form-divs">
                            <label
                                htmlFor='type'
                                style={{ fontWeight: 600 }}
                            >
                                Job Type
                            </label>
                            <br />
                            <select
                                id='type'
                                name='type'
                                required
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="form-inputs"
                            >
                                <option value='Full-Time'>Full-Time</option>
                                <option value='Part-Time'>Part-Time</option>
                                <option value='Remote'>Remote</option>
                                <option value='Internship'>Internship</option>
                            </select>
                        </div>
                        <div className="form-divs">
                            <label style={{ fontWeight: 600 }} >
                                Job Listing Name

                            </label>
                            <br />
                            <input
                                type='text'
                                id='title'
                                name='title'
                                placeholder='eg. Beautiful Apartment In Miami'
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-inputs"
                            />
                        </div>
                        <div className="form-divs">
                            <label
                                htmlFor='description'
                                style={{ fontWeight: 600 }}
                            >
                                Description
                            </label>
                            <br />
                            <textarea
                                id='description'
                                name='description'
                                rows='4'
                                placeholder='Add any job duties, expectations, requirements, etc'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-inputs"
                            ></textarea>
                        </div>
                        <div className="form-divs">
                            <label
                                htmlFor='type'
                                style={{ fontWeight: 600 }}

                            >
                                Salary
                            </label>
                            <br />
                            <select
                                id='salary'
                                name='salary'

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
                            <label style={{ fontWeight: 600 }}>
                                Location
                            </label>
                            <br />
                            <input
                                type='text'
                                id='location'
                                name='location'
                                placeholder='Company Location'
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="form-inputs"
                            />
                        </div>

                        <h3>Company Info</h3>

                        <div className="form-divs">
                            <label
                                htmlFor='company'
                                style={{ fontWeight: 600 }}

                            >
                                Company Name
                            </label>
                            <br />
                            <input
                                type='text'
                                id='company'
                                name='company'
                                placeholder='Company Name'
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="form-inputs"
                            />
                        </div>

                        <div className="form-divs">
                            <label
                                htmlFor='company_description'
                                style={{ fontWeight: 600 }}

                            >
                                Company Description
                            </label>
                            <br />
                            <textarea
                                id='company_description'
                                name='company_description'
                                rows='4'
                                placeholder='What does your company do?'
                                value={companyDescription}
                                onChange={(e) => setCompanyDescription(e.target.value)}
                                className="form-inputs"
                            ></textarea>
                        </div>

                        <div className="form-divs">
                            <label
                                htmlFor='contact_email'
                                style={{ fontWeight: 600 }}

                            >
                                Contact Email
                            </label>
                            <br />
                            <input
                                type='email'
                                id='contact_email'
                                name='contact_email'
                                placeholder='Email address for applicants'
                                required
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                                className="form-inputs"
                            />
                        </div>
                        <div className="form-divs">
                            <label
                                htmlFor='contact_phone'
                                style={{ fontWeight: 600 }}

                            >
                                Contact Phone
                            </label>
                            <br />
                            <input
                                type='tel'
                                id='contact_phone'
                                name='contact_phone'
                                placeholder='Optional phone for applicants'
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                                className="form-inputs"
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <button
                                type='submit'
                                style={{
                                    backgroundColor: '#0078d0'
                                }}
                            >
                                Add Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

EditJobPage.propTypes = {
    addJobSubmit: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
        company: {
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            contactEmail: PropTypes.string.isRequired,
            contactPhone: PropTypes.string.isRequired
        }
    })
}

export default EditJobPage