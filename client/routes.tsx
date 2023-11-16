import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './components/HomePage'
import DanceDetails from './components/DanceDetails'

export const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="dances/:id" element={<DanceDetails />} />
  </Route>,
)
