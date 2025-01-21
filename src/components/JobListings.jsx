import { Typography, useStepContext } from '@mui/material';
import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import '../index.css'


const JobListings = ({isHome}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_APP_API_URL;

    const url = isHome?`${apiUrl}?_limit=3`:`${apiUrl}`;
    useEffect(() => {

        const fetchJobs = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setJobs(data);
                console.log(jobs);
                
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
                    <div className="job-listing" key={job.id}>
                        <JobListing job={job} />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default JobListings
