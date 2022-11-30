// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'

// Payment History
import PaymentHistory from '../paymenthistory'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'


const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'suspended', label: 'Suspended' }
]

const countryOptions = [
    { value: 'uk', label: 'UK' },
    { value: 'usa', label: 'USA' },
    { value: 'france', label: 'France' },
    { value: 'russia', label: 'Russia' },
    { value: 'canada', label: 'Canada' }
]

const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'dutch', label: 'Dutch' }
]

const MySwal = withReactContent(Swal)

const CompanyProfile = ({ selectedUser }) => {
    // ** State
    const [show, setShow] = useState(false)

    // ** Hook
    const {
        reset,
        control,
        setError,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: 123,
            lastName: 12,
            firstName: 23
        }
    })

    const onSubmit = data => {
        if (Object.values(data).every(field => field.length > 0)) {
            setShow(false)
        } else {
            for (const key in data) {
                if (data[key].length === 0) {
                    setError(key, {
                        type: 'manual'
                    })
                }
            }
        }
    }

    const handleReset = () => {
        reset({
            username: 234,
            lastName: 3244,
            firstName: 234234
        })
    }


    return (
        <Fragment>
            <Card>
                <CardBody>
                    <div className='d-flex justify-content-between'>
                        <Col>
                            <h4 className='fw-bolder border-bottom pb-50 mb-1'>Your company information</h4>
                            <div className='info-container'>
                                {selectedUser !== null ? (
                                    <ul className='list-unstyled'>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>VAT nr.:</span>
                                            <span>email</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Name:</span>
                                            <span>username</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Address:</span>
                                            <Badge className='text-capitalize'>
                                                status
                                            </Badge>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Postal code:</span>
                                            <span className='text-capitalize'>role</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>City:</span>
                                            <span>Tax-</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Country:</span>
                                            <span>contact</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Phone:</span>
                                            <span>English</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Contact:</span>
                                            <span>England</span>
                                        </li>
                                    </ul>
                                ) : null}
                            </div>
                            <div className='d-flex pt-2'>
                                <Button color='primary' onClick={() => setShow(true)}>
                                    Edit
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <h4 className='fw-bolder border-bottom pb-50 mb-1'>Your own information</h4>
                            <div className='info-container'>
                                {selectedUser !== null ? (
                                    <ul className='list-unstyled'>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>E-mail</span>
                                            <span>email</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Name:</span>
                                            <span>username</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Address:</span>
                                            <Badge className='text-capitalize'>
                                                status
                                            </Badge>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Postal code:</span>
                                            <span className='text-capitalize'>role</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>City:</span>
                                            <span>Tax-</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Phone:</span>
                                            <span>contact</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Language:</span>
                                            <span>English</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Timezone:</span>
                                            <span>England</span>
                                        </li>
                                    </ul>
                                ) : null}
                            </div>
                            <div className='d-flex pt-2'>
                                <Button color='primary' onClick={() => setShow(true)}>
                                    Edit
                                </Button>
                            </div>
                        </Col>
                    </div>
                </CardBody>
            </Card>
            <PaymentHistory />
            <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
                <ModalBody className='px-sm-5 pt-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Edit User Information</h1>
                        <p>Updating user details will receive a privacy audit.</p>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className='gy-1 pt-75'>
                            <Col md={6} xs={12}>
                                <Label className='form-label' for='firstName'>
                                    First Name
                                </Label>
                                <Controller
                                    defaultValue=''
                                    control={control}
                                    id='firstName'
                                    name='firstName'
                                    render={({ field }) => (
                                        <Input {...field} id='firstName' placeholder='John' invalid={errors.firstName && true} />
                                    )}
                                />
                            </Col>
                            <Col md={6} xs={12}>
                                <Label className='form-label' for='lastName'>
                                    Last Name
                                </Label>
                                <Controller
                                    defaultValue=''
                                    control={control}
                                    id='lastName'
                                    name='lastName'
                                    render={({ field }) => (
                                        <Input {...field} id='lastName' placeholder='Doe' invalid={errors.lastName && true} />
                                    )}
                                />
                            </Col>
                            <Col xs={12}>
                                <Label className='form-label' for='username'>
                                    Username
                                </Label>
                                <Controller
                                    defaultValue=''
                                    control={control}
                                    id='username'
                                    name='username'
                                    render={({ field }) => (
                                        <Input {...field} id='username' placeholder='john.doe.007' invalid={errors.username && true} />
                                    )}
                                />
                            </Col>
                            <Col md={6} xs={12}>
                                <Label className='form-label' for='billing-email'>
                                    Billing Email
                                </Label>
                                <Input
                                    type='email'
                                    id='billing-email'
                                    defaultValue='email@email.com'
                                    placeholder='example@domain.com'
                                />
                            </Col>
                            <Col md={6} xs={12}>
                                <Label className='form-label' for='status'>
                                    Status:
                                </Label>
                                <Select
                                    id='status'
                                    isClearable={false}
                                    className='react-select'
                                    classNamePrefix='select'
                                    options={statusOptions}
                                    theme={selectThemeColors}
                                    defaultValue={statusOptions[statusOptions.findIndex(i => i.value === status)]}
                                />
                            </Col>
                            <Col md={6} xs={12}>
                                <Label className='form-label' for='tax-id'>
                                    Tax ID
                                </Label>
                                <Input
                                    id='tax-id'
                                    placeholder='Tax-1234'
                                    defaultValue='contact'
                                />
                            </Col>
                            <Col md={6} xs={12}>
                                <Label className='form-label' for='contact'>
                                    Contact
                                </Label>
                                <Input id='contact' defaultValue='contact' placeholder='+1 609 933 4422' />
                            </Col>
                            <Col md={6} xs={12}>
                                <Label className='form-label' for='language'>
                                    language
                                </Label>
                                <Select
                                    id='language'
                                    isClearable={false}
                                    className='react-select'
                                    classNamePrefix='select'
                                    options={languageOptions}
                                    theme={selectThemeColors}
                                    defaultValue={languageOptions[0]}
                                />
                            </Col>
                            <Col md={6} xs={12}>
                                <Label className='form-label' for='country'>
                                    Country
                                </Label>
                                <Select
                                    id='country'
                                    isClearable={false}
                                    className='react-select'
                                    classNamePrefix='select'
                                    options={countryOptions}
                                    theme={selectThemeColors}
                                    defaultValue={countryOptions[0]}
                                />
                            </Col>
                            <Col xs={12}>
                                <div className='d-flex align-items-center mt-1'>
                                    <div className='form-switch'>
                                        <Input type='switch' defaultChecked id='billing-switch' name='billing-switch' />
                                        <Label className='form-check-label' htmlFor='billing-switch'>
                                            <span className='switch-icon-left'>
                                                <Check size={14} />
                                            </span>
                                            <span className='switch-icon-right'>
                                                <X size={14} />
                                            </span>
                                        </Label>
                                    </div>
                                    <Label className='form-check-label fw-bolder' for='billing-switch'>
                                        Use as a billing address?
                                    </Label>
                                </div>
                            </Col>
                            <Col xs={12} className='text-center mt-2 pt-50'>
                                <Button type='submit' className='me-1' color='primary'>
                                    Submit
                                </Button>
                                <Button
                                    type='reset'
                                    color='secondary'
                                    outline
                                    onClick={() => {
                                        handleReset()
                                        setShow(false)
                                    }}
                                >
                                    Discard
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default CompanyProfile
