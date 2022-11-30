// ** React Imports
import { lazy } from 'react'

const Activity = lazy(() => import('../../views/activity'))

const ActivitiesRoutes = [
  {
    element: <Activity />,
    path: '/activities'
  }
]

export default ActivitiesRoutes
