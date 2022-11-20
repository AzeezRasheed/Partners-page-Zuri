import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorPage from './Error';
<<<<<<< HEAD

import App from './App';
import {
  CareerApplication,
  CareerLanding,
  CareerMoreJobs,
  CareerSingleJobView,
} from './pages/career';

import CustomerStories from './pages/CustomerStories';
import { CareerApplication } from './pages/career';
import About from './pages/About/components/About';


import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Images from './pages/dashboard/Images';
import DocumentationHome from './pages/documentation/Home/DocumentationHome';
import GettingStarted from './pages/documentation/GettingStartedPage/GettingStarted';
import Installations from './pages/documentation/InstallationsPage/Installations';
import ExamplePage from './pages/documentation/ExamplePage/ExamplePage';
import UtilitiesPage from './pages/documentation/UtilitiesPage/UtilitiesPage';

import Main from './pages/LandingPage/main';
=======
import CustomerStories from './pages/CustomerStories';
<<<<<<< HEAD
import App from './App';
>>>>>>> 6650e3b (add the customerroute)
=======
import { CareerApplication } from './pages/career';
import About from './pages/About/components/About';

import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import DocumentationHome from './pages/documentation/Home/DocumentationHome';
import GettingStarted from './pages/documentation/GettingStartedPage/GettingStarted';
import Installations from './pages/documentation/InstallationsPage/Installations';
import ExamplePage from './pages/documentation/ExamplePage/ExamplePage';
import UtilitiesPage from './pages/documentation/UtilitiesPage/UtilitiesPage';

import LandingPage from './pages/LandingPage/LandingPage';
import MinergramDemo from './pages/LandingPage/MinergramDemo/MinergramDemo';
>>>>>>> 8b9ec0b (made some changes to file)

const RoutesComponents = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index path="/" element={<App />}></Route>
          <Route
            index
            path="/documentation"
            element={<DocumentationHome />}
          ></Route>
          <Route
            path="/documentation/getting-started"
            element={<GettingStarted />}
          ></Route>
          <Route
            path="/documentation/installations"
            element={<Installations />}
          ></Route>
          <Route
            path="/documentation/examples"
            element={<ExamplePage/>}
          ></Route>
           <Route
            path="/documentation/utilities"
            element={<UtilitiesPage/>}
          ></Route>
          <Route path="/careers/application" element={<CareerApplication />} />
          <Route path="/careers/more-jobs" element={<CareerMoreJobs />} />
          <Route
            path="/careers/jobs/singles"
            element={<CareerSingleJobView />}
          />
          <Route path="*" element={<ErrorPage />}></Route>

		  <Route path="why-tozilla" element={<WhyTozilla/>}/>

        </Route>
<<<<<<< HEAD


        <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/images" element={<Images />} />
=======
        <Route path="customer-stories" element={<CustomerStories />}>
          {' '}
>>>>>>> 6650e3b (add the customerroute)
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;
