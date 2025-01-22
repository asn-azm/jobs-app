// import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// { IconButtonProps } 
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaMapMarker } from 'react-icons/fa';
import { useState } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

const JobListing = ({ job }) => {
    const [expanded, setExpanded] = useState(false);
    let description = job.description;

    if (!expanded) {
        description = description.substring(0, 90) + `...`;
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: '500px', minWidth:'500px' }}>
            <Typography sx={{ paddingTop: 3, paddingLeft: 2.5 }}>{job.type}</Typography>
            <CardHeader sx={{ marginTop: 0 }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={job.title}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{ color: '#1976d2' }}

                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <CardContent>
                <Typography variant="body2" sx={{ color: '#1976d2' }}>
                    {job.salary}
                </Typography>
            </CardContent>
            <Box sx={{ color: 'red', padding: '12px', display: 'flex', alignItems: 'center' }}>
                <FaMapMarker style={{ marginRight: '5px' }} />
                {job.location}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        flexGrow: 1,
                        color: '#1976d2'
                    }}
                >
                    <Link to={`/jobs/${job._id}`}>
                        <Button>Job Details</Button>
                    </Link>
                </Box>
            </Box>
        </Card>
    );
}
JobListing.propTypes = {
    job: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired
        // Add any other properties expected in the job object
    }).isRequired,
};

export default JobListing