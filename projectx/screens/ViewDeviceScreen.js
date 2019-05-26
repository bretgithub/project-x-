// required imports and dependencies
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';
import { withNavigation } from 'react-navigation';
import ViewDeviceForm from '../components/ViewDevice/ViewDevice';

// create classful component
class ViewDeviceScreen extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Device Details',
    };

    render() {

        console.log(this.props.navigation.state.params.data)

        return (
            // container for components
            <Container>
                <ScrollView>
                    <ViewDeviceForm />
                </ScrollView>
            </Container>

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(ViewDeviceScreen);
