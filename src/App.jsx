import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {

  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete a Job

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

// Update Job

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  const router = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/', element: <HomePage />
      },
      {
        path: 'jobs', element: <JobsPage />
      },
      {
        path: 'jobs/:id',
        element: <JobPage deleteJob = { deleteJob}/>,
        loader: jobLoader
      },
      {
        path: 'add-job',
        element: <AddJobPage addJobSubmit={addJob} />
      },
      {
        path: '/edit-job/:id',
        element: <EditJobPage updateJobSubmit={updateJob}/>,
        loader: jobLoader
      }
    ]
  }])

  return (
    <RouterProvider router={router} />
  )
};


export default App;




