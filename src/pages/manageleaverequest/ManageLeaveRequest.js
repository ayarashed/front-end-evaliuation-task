import React, { Component, useState } from 'react';
import TableLeaveRequest from '../../component/tableleaverequest/TableLeaveRequest';
import { FaFlag, FaUndo, FaRegEdit, FaRegEye, FaSearch, FaTrashAlt, FaEllipsisV, FaCheckSquare, FaPlus, FaGlobeAmericas } from "react-icons/fa";
import { BsArchive } from "react-icons/bs";
import './ManageLeaveRequest.scss';
import LeaveRequestData from '../../data/leave-request.json';
import { Link } from 'react-router-dom';
class ManageLeaveRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagenum: 'page 1 of 3',
            setTermSearch: ""
        }
    }
    async componentDidMount(){
        this.setState({returndata:LeaveRequestData});
    }
    handleChangepagenum = (e) => {
        this.setState({pagenum: e.target.value});
    }
    handleSearch = (e) => {
        this.setState({setTermSearch: e.target.value});
    }
    handleSearchsubmitt =(e) =>{
        if(this.state.setTermSearch == ""){
            alert('invalid search')
        }else{
            console.log(this.state.setTermSearch);
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="manageleaverequest">
                <div className="manageleaverequest">
                    <div className="container-fluid">
                        <div>
                            <div className="header">
                                <div className="row align-items-center">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <h6>Post Leave Request</h6>
                                            </div>
                                            <div className="col-6">
                                                <div className="request-number">
                                                    <p>
                                                        You Have 25 Application(s)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="search-header">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8 col-md-6 col-12">
                                            <div className="search">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-1 col-md-2 col-3">
                                                        <div className="img-bar">
                                                            <FaGlobeAmericas />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-11 col-md-10 col-9 row align-items-center">
                                                        <div className="search-bar col-9 ">
                                                            <div className="input-group col-9">
                                                                <input type="text" className="form-control" placeholder="Search Employe Name, Code, or Job Title" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleSearch}/>
                                                                <span className="input-group-text" id="basic-addon2"><FaUndo className="undo-icon" /></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <button className="btn-search btn" onClick={this.handleSearchsubmitt}>
                                                                <FaSearch />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="header-icons">
                                                <Link to='/'><span><FaPlus /></span></Link>
                                                <span><FaRegEdit /></span>
                                                <span><FaRegEye /></span>
                                                <span><FaCheckSquare /></span>
                                                <span><FaTrashAlt /></span>
                                                <span><BsArchive /></span>
                                                <span><FaEllipsisV /></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="request-leave-data">
                                    <TableLeaveRequest searchterm={this.state.setTermSearch}/>
                                </div>
                                <div className="footer">
                                    <div className="row">
                                        <div className="col-md-9 col-12 order-md-1 order-2">
                                            <ul>
                                                <li><span></span>Request Level</li>
                                                <li><span></span>Under Approval</li>
                                                <li><span></span>Final Level Approved</li>
                                                <li><span></span>Action taken (Leaving is posted and Approved or leave extension)</li>
                                                <li><span></span>Closed transaction</li>
                                                <li><span></span>Future Dated transaction</li>
                                                <li><span></span>Returned</li>
                                                <li><span></span>Hold</li>
                                                <li><span></span>Returned and On Hold</li>
                                                <li><span></span>Extended Leave Request</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-6 order-md-2 order-1">
                                            <select className="form-select" id="selectleavetype" value={this.state.pagenum} onChange={this.handleChangepagenum}>
                                                <option>1 of 3</option>
                                                <option value="1">2 0f 3</option>
                                                <option value="2">3 of 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ManageLeaveRequest;