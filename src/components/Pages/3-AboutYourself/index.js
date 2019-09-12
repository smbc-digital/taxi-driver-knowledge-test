import React, { Fragment } from 'react'
import { TextInputContainer, AddressPicker, Button, Anchor } from 'smbc-react-components'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'

export const AboutYourself = ({ context, history }) => {

    const onSubmit = (event) => {
        event.preventDefault()
        history.push(getPageRoute(4))
    }

    return(
        <Fragment>
            <form onSubmit={onSubmit}>
                <h1>{context.formHeader}</h1>
                <h2>Tell us about yourself</h2>
                <TextInputContainer
                    label='First name'
                    id='firstName'
                    type='text'
                    maxLength={35}
                    optional={false}
                    value={context.firstName.value}
                    onChange={context.onChange}
                />
                <TextInputContainer
                    label='Last name'
                    id='lastName'
                    type='text'
                    maxLength={60}
                    optional={false}
                    value={context.lastName.value}
                    onChange={context.onChange}
                />
                <TextInputContainer
                    label='Phone number'
                    id='phoneNumber'
                    type='tel'
                    value={context.phoneNumber.value}
                    onChange={context.onChange}
                />
                <TextInputContainer
                    label='Email address'
                    id='emailAddress'
                    type='email'
                    value={context.emailAddress.value}
                    onChange={context.onChange}
                />
                <AddressPicker
                    name='address'
                    address={context.address.value}
                    automaticLabel='Enter your postcode'
                    automaticDescription='If you don&#39;t have a Stockport postcode, enter your address manually below'
                    automaticTextLabel='Select the address below'
                    useVerintLookup={true}
                    useStockportPostcode={false}
                    enableHeading={false}
                    shouldDisplayManualSearch={false}
                    showManualOption={true}
                    manualLabel='Enter your address'
                    onChange={context.onChange}
                />
                <Button 
                    isValid={ context.address.isValid && context.phoneNumber.isValid && context.emailAddress.isValid } 
                    label='Next step' 
                />
            </form>
            <Anchor label='Previous' history={history} />
        </Fragment>
    )
}

AboutYourself.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(AboutYourself)