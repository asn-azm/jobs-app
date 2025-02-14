import { Typography } from "@mui/material";
import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import { toast } from "react-toastify";


const JobPage = ({ deleteJob }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const job = useLoaderData();
    console.log('job   => ', JSON.stringify(job));


    const onDeleteClick = (jobId) => {
        const confirm = window.confirm(`Are you sure you want to delete this listening?`)
        if (!confirm) return;
        deleteJob(jobId);
        toast.success(`Job deleted successfully!`)
        navigate('/jobs')
    }

    return (
        <>
            <section>
                <Link to="/jobs" color="inherit">
                    <Typography sx={{
                        padding: 3,
                        color: '#1976d2'
                    }}>Back to job listings!</Typography>
                </Link>
            </section>

            <section className="main-section">
                {/* First section: Left side */}
                <section className="left-section">
                    <Box
                        sx={{
                            padding: '30px',
                            backgroundColor: 'white',
                            minHeight: '100px',
                            borderRadius: '16px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <Typography sx={{ fontSize: '15px', color: '#a2b2ba' }}>{job.type}</Typography>
                        <Typography sx={{ fontSize: '30px', paddingTop: '10px', paddingBottom: '10px' }}>{job.title}</Typography>
                        <Typography sx={{ color: 'red' }}>{job.location}</Typography>
                    </Box>
                    <Box

                        sx={{
                            padding: '30px',
                            backgroundColor: 'white',
                            minHeight: '100px',
                            borderRadius: '16px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}

                    >
                        <Typography sx={{
                            fontSize: '20px',
                            color: '#1976d2'
                        }}>Job Description</Typography>
                        <Typography sx={{ paddingTop: '5px', paddingBottom: '5px' }}>{job.description}</Typography>
                        <Typography sx={{
                            fontSize: '20px',
                            color: '#1976d2'
                        }}>Salary</Typography>
                        <Typography sx={{ paddingTop: '5px' }}>{job.salary}</Typography>
                    </Box>
                </section>

                {/* Second section: Right side */}
                <section className="right-section">
                    <Box

                        sx={{
                            padding: '30px', backgroundColor: 'white', minHeight: '50%', borderRadius: '16px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}


                    >
                        <Typography sx={{ fontSize: '25px' }}>Company Info:</Typography>
                        <Typography sx={{ minHeight: '45%' }}>{job.company.description}</Typography>
                        <Typography sx={{ paddingTop: '5px', paddingBottom: '5px', fontSize: '25px' }}>Contact Email:</Typography>
                        <Typography sx={{ paddingTop: '5px', paddingBottom: '5px', backgroundColor: '#e8f4fa', marginTop: '10px' }}>{job.company.contactEmail}</Typography>
                        <Typography sx={{ paddingTop: '5px', paddingBottom: '5px', backgroundColor: '#e8f4fa', marginTop: '10px' }}>{job.company.contactPhone}</Typography>
                    </Box>

                    <Box


                        sx={{
                            padding: '15px', backgroundColor: 'white', maxHeight: '225%',
                            borderRadius: '16px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}

                    >
                        <Typography sx={{ fontSize: '25px' }}>Manage Job</Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button className="buttonEdit" role="button" onClick={() => navigate(`/edit-job/${job._id}`)}>Edit Job</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
                            <button className="buttonDelete" role="button" onClick={() => onDeleteClick(job._id)}>Delete Job</button>
                        </div>
                    </Box>
                </section>
            </section>
        </>

    )
}
const jobLoader = async ({ params }) => {
    const apiUrl = import.meta.env.VITE_APP_API_URL;

    console.log('params._id   =>', params.id, params);


    const res = await fetch(`${apiUrl}/${params.id}`);
    const data = await res.json();
    return data;
}

JobPage.propTypes = {
    deleteJob: PropTypes.func.isRequired
};

export { JobPage as default, jobLoader };






