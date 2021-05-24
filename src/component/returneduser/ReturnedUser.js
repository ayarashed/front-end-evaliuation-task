import React, { Component } from 'react';
import './returneduser.scss';
import LeaveRequestData from '../../data/leave-request.json';
class ReturnedUser extends Component {
    constructor(props){
        super(props);
        this.selectedUser  = this.selectedUser.bind(this);
        this.state = {
            users: LeaveRequestData,
            isLoading:false,
            isError:false,
            selectedRow: -1,
            userCode: ""
        }
    }
    async componentDidMount(){
        this.setState({isLoading:true});
        //this.setState({users:LeaveRequestData});
    }
    
    selectedUser = (code) =>{
        this.setState({userCode:code});
        console.log("code from selected row " , code);
        console.log("code of state " , this.state.userCode);
        console.log("users " , this.state.users);
        const filterUser = this.state.users.filter(function(user) {
            console.log("user" ,user);
            console.log("code" ,code);
            return  user.Code === code;
        });
        console.log(filterUser);
        this.props.onSelectedUser(filterUser[0]);   
    }
    renderTableRows = ()=>{
        return this.state.users.filter((val)=> {
            if(this.props.searchterm == ""){
                return val;
            } else if (val.Code.toLowerCase().includes(this.props.searchterm.toLowerCase()) || val.EmployeeName.toLowerCase().includes(this.props.searchterm.toLowerCase()) || val.JobTitle.toLowerCase().includes(this.props.searchterm.toLowerCase()) ){
                return val;
            }
        }).map(user => {
            return(
                <div className="card mb-3" key={user.ReqNo} onClick={()=> this.selectedUser(user.Code)}>
                    <div className="row g-0">
                    <div className="col-md-1 col-2">
                        <img src={user.ImageSrc}/>
                    </div>
                    <div className="col-md-11 col-10">
                        <div className="card-body">
                        <span className="card-text">{user.Code}</span>|
                        <span className="card-text">{user.EmployeeName}</span>|
                        <span className="card-text">{user.JobTitle}</span>|
                        <span className="card-text">{user.SalaryProfile}</span>
                        </div>
                    </div>
                    </div>
              </div>
            )
    })
    }
    render(){
        console.log(this.props.searchterm);
        const {users} = this.state;
        return users.length > -1 ? (
            <div className="returnedUser">
                    {this.renderTableRows()}
            </div>
        ):(
            <div>
                <h3> No Request Leave Until Now</h3>
            </div>
        )
    }
}
export default ReturnedUser;