// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import { Container, Form, Item, Input, Label } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';
import UserSetup from '../userAuthListener';

// create classful component
class ViewDeviceForm extends Component {

    state = {
        name: this.props.navigation.state.params.name,
        deviceId: this.props.navigation.state.params.deviceId,
        UID: this.props.navigation.state.params.UID,
        data: this.props.navigation.state.params.data,
        page: "ViewDevice",
        scheduleData: []
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', async (route) => {
            const setState = this.setState.bind(this)
            await UserSetup(this.state.UID, setState, this.state.page, this.state.deviceId)
            // console.log("SCHEDULE", this.state.scheduleData)
            // this.handleNewSchedule()
        })
        // inceptor to add userId to headers in order to make API calls as an authenticated user.  UserSetup also has an API call to retrieve all the arduinos for the account that will then be displayed to user on a table. 

    }

    goToSetSchedule = (userObj) => {
        const { scheduleData, name, deviceId, UID } = this.state
        const editSchedule = { scheduleData }
        const editName = { name }
        const editDeviceId = { deviceId }
        const navigateAction = NavigationActions.navigate({
            routeName: "SetSchedule",
            params: { data: userObj, editSchedule: editSchedule.scheduleData, name: editName, deviceId: editDeviceId, UID: UID }
        });
        // console.log("USEROBJ", this.state)

        this.props.navigation.dispatch(navigateAction);
    }

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.viewDeviceText}>
                            Device ID:
                        </Text>
                        <Text style={styles.viewDeviceInfo}>
                            {this.state.deviceId}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.viewDeviceText}>
                            Device Name:
                        </Text>
                        <Text style={styles.viewDeviceInfo}>
                            {this.state.name}
                        </Text>
                    </View>

                    <View>
                        <Button title="Edit Device" style={styles.setScheduleButton} onPress={this.goToSetSchedule} />
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20, textDecorationLine: "underline" }}>
                            Device Schedule
                        </Text>
                    </View>
                    <ScrollView>
                        <View >
                            {
                                this.state.scheduleData ? this.state.scheduleData.map((sch, i) => {
                                    return (
                                        <View key={i}>
                                            <Text style={styles.viewScheduleText} >{this.capitalize(`${sch.day}`)}   |   {`${sch.time}`}   |   {`${sch.amount} cups`}</Text>
                                        </View>)
                                }
                                )
                                    : null}
                        </View>
                    </ScrollView>
                </Container>
            </ScrollView >

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(ViewDeviceForm);

const styles = StyleSheet.create({

    viewDeviceText: {
        textAlign: "left",
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
        fontWeight: "bold"
    },

    viewDeviceInfo: {
        textAlign: "left",
        fontSize: 18,
        marginTop: 20,
        marginLeft: 5
    },

    setScheduleButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

    viewScheduleText: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 20
    }

});
