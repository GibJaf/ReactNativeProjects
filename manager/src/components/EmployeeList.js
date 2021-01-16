import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import _ from 'lodash';
import EmployeeListItem from './EmployeeListItem';


class EmployeeList extends Component{

    conponentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with.
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderItem(employee) {
        return <EmployeeListItem employee={employee} />;
    }

    render(){

        console.log(this.props);

        //In the tutorial, ListView was being used, but it has been deprecated. Tried using FlatList, but it doesn't work
        return(
            <FlatList
                data={this.dataSource}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
            />
        );
   }
};

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // { shift: 'Friday', name: 'Sam', id: 'abcd123'};
    });
}



export default connect(null, { employeesFetch })(EmployeeList);