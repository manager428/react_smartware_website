// ** React Imports
import { lazy } from 'react'

const Report = lazy(() => import('../../views/reports'))

const ActivitiesRoutes = [
  {
    element: <Report />,
    path: '/reports'
  }
]

export default ActivitiesRoutes
