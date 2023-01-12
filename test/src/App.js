import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import VideoDetails from './Components/VideoDetails/VideoDetails';
import ChannelDetails from './Components/ChannelDetails/ChannelDetails';
import Error from './Components/Error/Error';
import SearchFeed from './Components/SearchFeed/SearchFeed';
import Feed from './Components/Feed/Feed';

function App() {
  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<Error />}>
        <Route element={<VideoDetails />} path="video/:id" />
        <Route element={<Feed />} path="/" />
        <Route element={<ChannelDetails />} path="channel/:id" />
        <Route element={<SearchFeed />} path="search/:id" />
      </Route>



    )


  )
  return (

    <RouterProvider router={router} />

  )
}

export default App;
