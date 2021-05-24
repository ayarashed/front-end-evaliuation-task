import React, { Component, useState } from 'react';
import axios from 'axios';
import './table.scss';
class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            isLoading:false,
            isError:false
        }
    }
    async componentDidMount(){
       /* this.setState({isLoading:true});
        const response = await fetch ("https://jsonplaceholder.typicode.com/users");
        if(response.ok){
            const users = await response.json();
            console.log(users);
            this.setState({users , isLoading:false});
        }else{
            this.setState({isError:true, isLoading:false});
        }*/
    }
    /*renderTableHeader = ()=>{
        return Object.keys(this.state.users[0]).map(attr => <th key={attr}>
            {attr.toUpperCase()}
        </th>)
    }*/
    render(){
        return(
            <div key={this.props.fetchedUser.code} className="leaves">
                <ul>
                    <h6>Annual Leave</h6>
                    <li>Annual Leave Entitlement <span>{this.props.fetchedUser.AnnualleaveEntitlement}</span></li>
                    <li>Annual Leave Balance <span>{this.props.fetchedUser.AnnualleaveBalance} Day(s)</span></li>
                    <li>Al Bal. Till Year End <span>{this.props.fetchedUser.AlbalTillYearEnd} Day(s)</span></li>
                </ul>
                <ul>
                    <h6>Extra Days</h6>
                    <li>Extra Days Balance <span>{this.props.fetchedUser.ExtraDaysBalance} Day(s)</span></li>
                </ul>
                <ul>
                    <h6>Sick Leave</h6>
                    <li>Sick Leave(s) Taken <span>{this.props.fetchedUser.SickLeaveTaken} Day(s)</span></li>
                </ul>
                <ul>
                    <h6>Unpaid Leaves</h6>
                    <li>Unpaid Leave Taken <span>{this.props.fetchedUser.UnpaidLeaveTaken} Day(s)</span></li>
                </ul>
                <ul>
                    <h6>Leave In Progress</h6>
                    <li>Annual Leave <span>0 Day(s)</span></li>
                    <li>Extra Days <span>0 Day(s)</span></li>
                    <li>Sick Leave <span>0 Day(s)</span></li>
                    <li>Unpaid Leaves <span>0 Day(s)</span></li>
                </ul>
            </div>
        )
    }
}
export default Table;