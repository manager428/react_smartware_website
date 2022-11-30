// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, Input, Label, Button } from 'reactstrap'

// ** Icons Imports
import { Check, X, Link } from 'react-feather'
import { FALSE } from 'sass'

const socialAccounts = [
    {
        linked: false,
        title: 'ActiveCampaign',
        logo: require('@src/assets/images/icons/social/activecampaign-bluebg.png').default
    },
    {
        linked: false,
        title: 'Bing Ads',
        logo: require('@src/assets/images/icons/social/bing.png').default
    },
    {
        linked: false,
        title: 'Campaign Monitor',
        logo: require('@src/assets/images/icons/social/campaign-monitor-small.png').default
    },
    {
        linked: false,
        title: 'Facebook',
        logo: require('@src/assets/images/icons/social/facebook.png').default
    },
    {
        linked: false,
        title: 'Facebook Ads',
        logo: require('@src/assets/images/icons/social/facebook-logo.png').default
    },
    {
        linked: false,
        title: 'Google Ads',
        logo: require('@src/assets/images/icons/social/googleadslogo.png').default
    },
    {
        linked: false,
        title: 'Google Analytics',
        logo: require('@src/assets/images/icons/social/google-analytics.svg').default
    },
    {
        linked: false,
        title: 'Google Analytics 4',
        logo: require('@src/assets/images/icons/social/GoogleAnalytics4.svg').default
    },
    {
        linked: false,
        title: 'Google Business Profile',
        logo: require('@src/assets/images/icons/social/GoogleMyBusiness.svg').default
    },
    {
        linked: true,
        title: 'Google Search Console',
        url: 'https://google.com/',
        logo: require('@src/assets/images/icons/social/google.png').default
    },
    {
        linked: false,
        title: 'HubSpot',
        logo: require('@src/assets/images/icons/social/hubspot-small.png').default
    },
    {
        linked: false,
        title: 'Instagram',
        logo: require('@src/assets/images/icons/social/instagram.png').default
    },
    {
        linked: false,
        title: 'LinkedIn',
        logo: require('@src/assets/images/icons/social/linkedin.png').default
    },
    {
        linked: false,
        title: 'LinkedIn Ads',
        logo: require('@src/assets/images/icons/social/linkedin.png').default
    },
    {
        linked: false,
        title: 'MailChimp',
        logo: require('@src/assets/images/icons/social/mailchimp.png').default
    },
    {
        linked: true,
        title: 'Twitter',
        url: 'https://twitter.com/',
        logo: require('@src/assets/images/icons/social/twitter.png').default
    },
    {
        linked: false,
        title: 'Twitter Ads',
        logo: require('@src/assets/images/icons/social/twitter.png').default
    },
    {
        linked: false,
        title: 'Zapier',
        logo: require('@src/assets/images/icons/social/zapier.svg').default
    }
]

const connections = () => {
    return (
        <Fragment>
            <Card>
                <CardBody>
                    <CardTitle className='mb-75'>Social accounts</CardTitle>
                    <p>Display content from social accounts on your site</p>
                    {socialAccounts.map((item, index) => {
                        return (
                            <div key={index} className='d-flex mt-2'>
                                <div className='flex-shrink-0'>
                                    <img className='me-1' src={item.logo} alt={item.title} height='38' width='38' />
                                </div>
                                <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                    <div className='me-1'>
                                        <p className='fw-bolder mb-0'>{item.title}</p>
                                        {item.linked ? (
                                            <a href={item.url} target='_blank'>
                                                {item.url}
                                            </a>
                                        ) : (
                                            <span>Not Connected</span>
                                        )}
                                    </div>
                                    <div className='mt-50 mt-sm-0'>
                                        <Button outline className='btn-icon'>
                                            {item.linked ? <X className='font-medium-3' /> : <Link className='font-medium-3' />}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default connections
