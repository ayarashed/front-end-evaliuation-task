import React, { Component } from 'react';
import './tableleaverequest.scss';
import LeaveRequestData from '../../data/leave-request.json';
import {Link} from 'react-router-dom';
class TableLeaveRequest extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            requests: [],
            isLoading:false,
            isError:false,
            selectedRow: -1,
            selectedreqno: ""
        }
        console.log("props termsearch",this.props.searchterm)
    }
    async componentDidMount(){
        this.setState({isLoading:true});
        this.setState({requests:JSON.parse(localStorage.getItem('requests'))});
        
    }
    navigateToEdit=(user)=>{
        this.props.history.push(
            '/',
            user
            )
    }
    /*handlekey =(reqNo) =>{
        console.log(reqNo);
        this.setState({selectedreqno:reqNo});
        console.log("code from selected row " , reqNo);
        console.log("code of state " , this.state.selectedreqno);
        console.log("users " , this.state.requests);
        const filterRequest = this.state.requests.filter(function(request) {
            console.log("request" ,request);
            console.log("requestno" ,reqNo);
            return  request.reqNo === reqNo;
        });
        console.log("filter",filterRequest);
        console.log("filterleavetype",filterRequest[0].leaveType);
        this.props.onSelectedRequest(filterRequest[0]);  
    }*/
    /*deletedrow = (select)=>{
            for (var i =0; i< this.state.requests.length; i++) {
            var deletedRequest= JSON.parse(this.state.requests[i]);
            if (deletedRequest.reqNo == select) {
                deletedRequest.splice(i, 1);
            }
        }
    }*/
    renderTableRows = ()=>{
        const requests = JSON.parse(localStorage.getItem('requests'));
        return requests.filter((val)=> {
            if(this.props.searchterm == ""){
                return val;
            } else if (val.code.toLowerCase().includes(this.props.searchterm.toLowerCase()) || val.employeeName.toLowerCase().includes(this.props.searchterm.toLowerCase()) || val.jobTitle.toLowerCase().includes(this.props.searchterm.toLowerCase()) ){
                return val;
            }
        })
        .map(request => {
                return(
                    <tr key={request.reqNo} className={request.requestStatus}>
                        <td><Link to={{pathname : '/', request}}>{request.reqNo}</Link></td>
                        <td style={{width: '70px'}}><Link to={{pathname : '/', request}}><img src={request.imageSrc}/></Link></td>
                        <td><Link to={{pathname : '/', request}}>{request.code}</Link></td>
                        <td><Link to={{pathname : '/', request}}>{request.employeeName}</Link></td>
                        <td><Link to={{pathname : '/', request}}>{request.jobTitle}</Link></td>
                        <td><Link to={{pathname : '/', request}}>{request.SalaryProfile}</Link></td>
                        <td><Link to={{pathname : '/', request}}>{request.leaveDate}</Link></td>
                        <td><Link to={{pathname : '/', request}}>{request.rejoinDate}</Link></td>
                        <td><Link to={{pathname : '/', request}}>{request.actualleaving}</Link></td>
                        <td><Link to={{pathname : '/', request}}>{request.leaveType}</Link></td>
                    </tr>
                )
        })
    }
    render(){
        const {requests} = this.state;
        return requests.length > 0 ? (
            <table className="tableleaverequest">
                <thead>
                    <tr>
                        <th>Req No</th>
                        <th>Image</th>
                        <th>Code</th>
                        <th>Employee Name</th>
                        <th>Job Title</th>
                        <th>Salary Profile</th>
                        <th>Expected Leave Start Date</th>
                        <th>Expected Leave Rejoining Date</th>
                        <th>Actual leaving</th>
                        <th>leave Type</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        ):(
            <div>
                <h3> No Request Leave Until Now</h3>
            </div>
        )
    }
}
export default TableLeaveRequest;

