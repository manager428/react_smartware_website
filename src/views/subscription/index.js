import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Card,
    Button,
    CardBody,
    CardText,
    Progress,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown
} from 'reactstrap'

const Subscription = () => {
    // ** States

    return (
        <Card>
            <CardBody>
                <Row className='mt-5'>
                    <Col md='6' sm='12'>
                        <h2>AGENCY360 AGENCY(MONTHLY)</h2>
                        <h6 className='mb-5'>Renewed automatically on December 2, 2022.</h6>
                        <div className='d-flex justify-content-between'>
                            <Button color='primary'>Change subscription</Button>
                            <Button color='primary'>Update payment details</Button>
                        </div>
                        
                    </Col>
                    <Col md='6' sm='12'>
                        <Row className='pt-50'>
                            <Col className='mb-2' md='6' sm='12'>
                                <p className='mb-50 d-flex justify-content-between'><span>Clients</span><span>15/25</span></p>
                                <Progress className='avg-session-progress mt-25' value='50' />
                            </Col>
                            <Col className='mb-2' md='6' sm='12'>
                                <p className='mb-50 d-flex justify-content-between'><span>SEO keywords</span><span>154/1000</span></p>
                                <Progress className='avg-session-progress mt-25' value='50' />
                            </Col>
                            <Col className='mb-2' md='6' sm='12'>
                                <p className='mb-50 d-flex justify-content-between'><span>Web leads</span><span>76/2000</span></p>
                                <Progress className='avg-session-progress mt-25' value='50' />
                            </Col>
                            <Col className='mb-2' md='6' sm='12'>
                                <p className='mb-50 d-flex justify-content-between'><span>SEO competitors</span><span>24/50</span></p>
                                <Progress className='avg-session-progress mt-25' value='50' />
                            </Col>
                            <Col md='6' sm='12'>
                                <p className='mb-50 d-flex justify-content-between'><span>Site audit domains</span><span>11/25</span></p>
                                <Progress className='avg-session-progress mt-25' value='50' />
                            </Col>
                            <Col md='6' sm='12'>
                                <p className='mb-50 d-flex justify-content-between'><span>Google Analytics profiles</span><span>11/50</span></p>
                                <Progress className='avg-session-progress mt-25' value='50' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
export default Subscription
