import JobListings from '../components/JobListings'
import Hero from '../components/Hero'

const JobsPage = () => {
    return (
        <>
            <Hero />
            <JobListings isHome={false}/>
        </>
    )
}

export default JobsPage