import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import './HomeCards.css';
import { useNavigate } from 'react-router-dom';

const HomeCards = () => {
    const navigate = useNavigate();
    return (
        <section className="homecards-container">
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={6}>
                    <Card sx={{backgroundColor:"#d8d7f5"}}>
                        <CardContent>
                            <Typography variant="h6">For Developers</Typography>
                            <Typography variant="body2">
                                Browse our React jobs and start your career today
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={()=> navigate(`/jobs`)}>Browse Jobs</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Card sx={{backgroundColor:"#c0bef7"}}>
                        <CardContent>
                            <Typography variant="h6">For Employers</Typography>
                            <Typography variant="body2">
                                List your job to find the perfect developer for the role
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={()=> navigate(`/add-job`)}>Add Job</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </section>
    );
};

export default HomeCards;
