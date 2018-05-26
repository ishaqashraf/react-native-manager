import React, { Component } from 'react';
import { View, Text,Picker } from 'react-native';
import { connect  } from 'react-redux';
import {employeeUpdate, employeeCreate } from '../actions';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import Spinner from './common/Spinner';

class EmployeeCreate extends Component {
  constructor(props){
    super(props);
  }

  onButtonPress(){
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            onChangeText={value => this.props.employeeUpdate({ prop:'name', value })}
            value={this.props.name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
            value={this.props.phone}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column', }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
          selectedValue={this.props.shift}
          onValueChange={value => this.props.employeeUpdate({ props: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle:{
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  const { name,phone,shift } = state.employeeForm;

  return { name,phone,shift };

}

export default connect(mapStateToProps, { 
  employeeUpdate,employeeCreate 
})(EmployeeCreate);
