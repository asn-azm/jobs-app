import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {

  const apiUrl = import.meta.env.VITE_APP_API_URL;


  // Add New Job
  const addJob = async (newJob) => {
    await fetch(apiUrl, {
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
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update Job

  const updateJob = async (job) => {
    await fetch(`${apiUrl}/${job.id}`, {
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
        path: '/jobs/:id',
        element: <JobPage deleteJob={deleteJob} />,
        loader: jobLoader
      },
      {
        path: 'add-job',
        element: <AddJobPage addJobSubmit={addJob} />
      },
      {
        path: '/edit-job/:id',
        element: <EditJobPage updateJobSubmit={updateJob} />,
        loader: jobLoader
      }
    ]
  }])

  return (
    <RouterProvider router={router} />
  )
};


export default App;




