// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import UseManagementTab from './Tabs'

// ** Custom Component
import Breadcrumbs from '@components/breadcrumbs'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UsageManagement = () => {
    const search = window.location.search
    const id = search.includes('=') ? search.split("=")[1] : '1'
    
    const [active, setActive] = useState(id)

    const toggleTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    
    return (
        <div className='app-user-view'>
            <Breadcrumbs title='Account' data={[{ title: 'Home' }, { title: 'Account' }]} />
            <Row>
                <UseManagementTab active={active} toggleTab={toggleTab} />
            </Row>
        </div>
    )
}
export default UsageManagement
