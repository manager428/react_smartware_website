// ** Reactstrap Imports
import { Row, Col, Alert } from 'reactstrap'


// ** Custom Component
import Breadcrumbs from '@components/breadcrumbs'
import ActivitiesView from '../activitiesView'
import WeekCalendar from '../calendar'

// ** Styles
import '@styles/react/apps/app-users.scss'

const Activity = () => {
    
    return (
        <div className='app-user-view'>
            <Breadcrumbs title='Activities' data={[{ title: 'Home' }, { title: 'Activities' }]} />
            <Row>
                <ActivitiesView />
                <WeekCalendar />
            </Row>
        </div>
    )
}
export default Activity
