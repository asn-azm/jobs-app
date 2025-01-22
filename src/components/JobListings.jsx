import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import PropTypes from 'prop-types';
import '../index.css'


const JobListings = ({isHome}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_APP_API_URL;

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                isHome?setJobs(data.slice(0, 3)):setJobs(data);

                console.log('jobs   => ', jobs);
                
            }
            catch (error) {
                console.log('Error Fetching Data', error);

            } finally {
                setLoading(false)
            }
        }
        fetchJobs();
    }, [])

    return (
        <section style={{ backgroundColor: '#c0bef7', padding: '15px' }}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h2" sx={{ alignItems: "center", color: '#1976d2' }}>{isHome?'Recent Jobs':'Browse Jobs'}</Typography> {/* Example header */}
            </div>
            <div className='jobs-section'>
                {jobs.map((job) => (
                    <div className="job-listing" key={job._id}>
                        <JobListing job={job} />
                    </div>
                ))}
            </div>

        </section>
    )
}

JobListings.propTypes = {
    isHome: PropTypes.bool.isRequired
};

export default JobListings
