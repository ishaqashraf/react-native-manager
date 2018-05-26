import React, { Component } from 'react';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';

import {Router,Stack,Scene, Actions} from 'react-native-router-flux';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login"/>
                </Scene>
                <Scene key="main">
                    <Scene
                    rightTitle="Add"
                    onRight={() => { Actions.employeeCreate() }} 
                    key="employee" 
                    component={EmployeeList} 
                    title="Employee's"/>
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                </Scene>
                </Stack>
            </Router>
        );
    }
}

export default Routes;

