import React , {Component} from 'react';
import { Redirect } from 'react-router';
import '../../pages/postleaverequest/PostLeaveRequest.scss';
import { FaFlag, FaUndo, FaRegCalendarCheck, FaInfoCircle, FaPaperclip, FaGlobeAmericas, FaFemale } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import male from '../../images/Artboard_2-512.png';

class EditRequest extends Component{
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            redirect: false,
            leaveType: '',
            replacement: '',
            guarantor: '',
            selectedFile: '',
            fileselected: '',
            leaveDate: "",
            rejoinDate: '',
            abroadValue: "Abroad",
            localValue: "Local",
            yesValue : "yes",
            noValue :"no",
            leaveToAvail: "Local",
            requireLeaveSalaryAdvance: "No",
            email: '',
            address : '',
            contactNo : '',
            numberDays : '',
            remarks : '',
            requests:[],
            request: this.props.location.request,
            selectedRequest:{}
          };
          this.handleLeaveTypeChange = this.handleLeaveTypeChange.bind(this);
          this.handleChangeNumberDays = this.handleChangeNumberDays.bind(this);
          this.handleChangereplacement = this.handleChangereplacement.bind(this);
          this.handleChangeguarantor = this.handleChangeguarantor.bind(this);
          this.handleChangLeaveDate  = this.handleChangLeaveDate .bind(this);
          this.handleChangrejoinDate = this.handleChangrejoinDate.bind(this);
          this.handleChangeAddress = this.handleChangeAddress.bind(this);
          this.handleChangeEmail  = this.handleChangeEmail.bind(this);
          this.handleChangeContactNo  = this.handleChangeContactNo.bind(this);
          this.handleChangeRemarks = this.handleChangeRemarks.bind(this);
    }
    handleLeaveTypeChange= (e) => {
        this.setState({ leaveType: e.target.value });
    }
    handleChangeRadio= (e)=>{
        this.setState({leaveToAvail : e.target.value});
    }
    handleChangeRadioLocal= (e)=>{
        this.setState({leaveToAvail: e.target.value});
    }
    handleChangeRadioYes = (e)=>{
        this.setState({requireLeaveSalaryAdvance : e.target.value});
    }
    handleChangeRadioNo = (e)=>{
        this.setState({requireLeaveSalaryAdvance : e.target.value});
    }
    handleChangeNumberDays = (e) =>{
        this.setState({ numberDays: e.target.value });
       
    }
    handleChangereplacement = (e) => {
        this.setState({ replacement: e.target.value });
        
    }
    handleChangeguarantor = (e) => {
        this.setState({ guarantor: e.target.value });
        
    }
    handleChangLeaveDate = (e) => {
        this.setState({ leaveDate: e.target.value});

    }
    handleChangrejoinDate = (e) => {
        this.setState({ rejoinDate: e.target.value });
    }
    handleChangeAddress = (e) => {
        this.setState({ address: e.target.value });
    }
    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    handleChangeContactNo = (e) => {
        this.setState({ contactNo: e.target.value });
    }
    handleChangeRemarks= (e) => {
        this.setState({ remarks: e.target.value });
    }
    handleFileSelect = (e) => {
        this.setState({ fileselected: this.fileInput.current.files[0].name });
    }
    /*async componentDidMount(){
        const requests = JSON.parse(localStorage.getItem('requests'));
        console.log("localstorage", requests);
        const filterRequest = requests.filter(function(request) {
            return  request.reqNo == this.props.location.request.reqNo;
        });
        this.setState({selectedRequest:filterRequest});
        console.log("propsreq" , this.props.location.request.reqNo)
        console.log("selectedrequest",this.state.selectedRequest);
    }*/
render(){
    console.log("edit", this.props.location.request)
    console.log("edit", this.props.location.request.reqNo)
    return (
        <div className="postleaverequest">
            <div className="container-fluid">
                <div>
                    <div className="header">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <h6>Edit Leave Request</h6>
                                    </div>
                                    <div className="col-6">
                                        <div className="request-number">
                                            <p>
                                                <span><FaFlag className="flag-icon" /></span>
                                                Request No.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="empolyee-info">
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-2">
                                                    <div className="card-avatar">
                                                        <img src={male} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-10 body--border">
                                                    <div className="card-body">
                                                       
                                                        <ul>
                                                        <h6></h6>
                                                            <li><span>Job Title</span>{this.props.location.request.reqNo} <span></span></li>
                                                            <li><span>Salary profile </span><span></span></li>
                                                            <li><span>Joining Date </span><span></span></li>
                                                            <li><span>Location </span><span></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leaverequest-form">
                                        <div className="container-fluid">
                                            <div className="form">
                                                <form >
                                                    <fieldset>
                                                        <legend>Leave Details</legend>
                                                        <div className="col-12 leavetoavail">
                                                            <div className="row">
                                                                <div className="leavetoavail-label col-lg-4 col-md-4 col-6">
                                                                    <label className="form-check-label d-inline-block">
                                                                        Leave to Avail
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-8 col-md-8 col-12">
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="radio" id="Abroad"
                                                                                value={this.state.abroadValue}
                                                                                name="Avail"
                                                                                onChange={this.handleChangeRadio} />Abroad
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="radio" name="Avail" id="Local" value={this.state.localValue} onChange={this.handleChangeRadioLocal} defaultChecked />Local
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 leavesalary">
                                                            <div className="row">
                                                                <div className="leavesalary-label col-lg-4 col-md-4 col-12">
                                                                    <label className="form-check-label">
                                                                        Require Leave Salary Advance
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-8 col-md-8 col-6">
                                                                    <div className="form-check d-inline-block">
                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={this.state.yesValue} onChange={this.handleChangeRadioYes}/>
                                                                        <label className="form-check-label yes" htmlFor="flexRadioDefault1">
                                                                            Yes
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check d-inline-block">
                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={this.state.noValue} onChange={this.handleChangeRadioNo} defaultChecked />
                                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                            No
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 expected-date">
                                                            <div className="row">
                                                                <div className="col-xl-7 col-12">
                                                                    <div className="row">
                                                                        <div className="col-xl-7 col-lg-4 col-md-6 col-12">
                                                                            <label htmlFor="leavedate">Expected Leaving Date</label>
                                                                        </div>
                                                                        <div className="col-xl-5 col-lg-8 col-md-6 col-12 text-left">
                                                                        <input type="date"  className="text-left" id="leavedate" name="leavedate" onChange={this.handleChangLeaveDate} defaultValue={this.state.leaveDate}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-5 col-12">
                                                                    <div className="row">
                                                                        <div className="col-xl-6 col-lg-4  col-md-6 col-12">
                                                                            <label htmlFor="rejoiningdate">Expected Rejoining Date</label>
                                                                        </div>
                                                                        <div className="col-xl-6 col-lg-8 col-md-6 col-12">
                                                                            <input type="date" id="rejoiningdate" name="rejoiningdate" onChange={this.handleChangrejoinDate} defaultValue={"2021-08-26"} />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 expected-end-date">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-12 expected-end-date-label">
                                                                    <p>Expected End Date</p>
                                                                </div>
                                                                <div className="col-12 expected-end-date-content">
                                                                    <div className="row">
                                                                        <div className="col-lg-6 col-12">
                                                                            <label className="form-check-label" htmlFor="selectleavetype">
                                                                                1st Leave Type
                                                                            </label>
                                                                            <select className="form-select" id="selectleavetype" value={this.state.leaveType} onChange={this.handleLeaveTypeChange}>
                                                                                <option>{this.props.location.request.leaveType || "--select Type Of Leave--"} </option>
                                                                                <option>One</option>
                                                                                <option>Two</option>
                                                                                <option>Three</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="col-lg-6 col-12 number-days">
                                                                            <label className="form-check-label" htmlFor="numberdays">
                                                                                No. Of Days
                                                                                </label>
                                                                            <input type="number" className="form-control" id="numberdays" name="Enter Numb" min="1" value={this.state.numberDays || this.props.location.request.numberDays } onChange={this.handleChangeNumberDays}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button type="submit">
                                                                    <span style={{color:"#24298F"}}><BsPlusCircle className="add-icon"/></span>
                                                                </button>
                                                                <div className="col-12 total-days">
                                                                    <div className="text-center">
                                                                        <span><FaRegCalendarCheck /></span>
                                                                        <p className="d-inline-block">Total Days</p>
                                                                    </div>
                                                                </div>
                                                            </div>{/*************expected-end-date**********/}
                                                            <div className="row">
                                                                <div className="col-md-6 col-12">
                                                                    <div className="guarantor">
                                                                        <div className="guarantor-header">
                                                                            <label htmlFor="selectguarantor" className="col-12">Guarantor</label>
                                                                        </div>
                                                                        <div className="col-10 guarantor-selection">
                                                                            <select className="form-select" id="selectguarantor" aria-label="select an option" value={this.state.guarantor} onChange={this.handleChangeguarantor}>
                                                                                <option> --Select an Option--</option>
                                                                                <option>One</option>
                                                                                <option>Two</option>
                                                                                <option>Three</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-12">
                                                                    <div className="replacement">
                                                                        <div className="replacement-header">
                                                                            <label htmlFor="selectreplacement" className="col-12">Replacement</label>
                                                                        </div>
                                                                        <div className="col-10 replacement-selection">
                                                                            <select className="form-select" id="selectreplacement" aria-label="select an option" value={this.state.replacement} onChange={this.handleChangereplacement}>
                                                                                <option> --Select an Option--</option>
                                                                                <option>One</option>
                                                                                <option>Two</option>
                                                                                <option>Three</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>{/***************end replacement*********/}
                                                            </div>
                                                        </div>
                                                        <div className="contact-details">
                                                            <div className="col-12">
                                                                <div className="contact-details-header">
                                                                    <h6>Contact Details During Leave</h6>
                                                                </div>
                                                                <div className="contact-details-content">
                                                                    <div className="row">
                                                                        <div className="col-6">
                                                                            <div className="row mb-3">
                                                                                <label htmlFor="inputaddress" className="col-lg-3 col-12 col-form-label">Address</label>
                                                                                <div className="col-lg-9 col-12">
                                                                                    <input type="text" className="form-control" id="inputaddress" value={this.state.address } onChange={this.handleChangeAddress}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <div className="row mb-3">
                                                                                <label htmlFor="inputphone" className="col-lg-4 col-12 col-form-label">Contact No.</label>
                                                                                <div className="col-lg-8 col-12">
                                                                                    <input type="phone" className="form-control" id="inputphone" value={this.state.ContactNo} onChange={this.handleChangeContactNo} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <div className="row mb-3">
                                                                                <label htmlFor="inputEmail3" className="col-lg-3 col-12 col-form-label">Email</label>
                                                                                <div className="col-lg-9 col-12">
                                                                                    <input type="email" className="form-control" id="inputEmail3" value={this.state.email} onChange={this.handleChangeEmail}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <div className="notes">
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <div className="remarks">
                                                                    <div className="remarks-header">
                                                                        <h6>Remarks</h6>
                                                                    </div>
                                                                    <div className="remarks-text col-lg-8 col-10">
                                                                        <textarea id="remarks-message" rows="3" value={this.state.remarks} onChange={this.handleChangeRemarks}></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <div className="attatchment">
                                                                    <div className="attatchment-header">
                                                                        <h6>Attatchments</h6>
                                                                    </div>
                                                                    <div className="attatchment-file col-10">
                                                                        <input type="text" className="form-control" id="inputfile" value={ this.state.fileselected} />
                                                                        <label htmlFor="upload-photo"><FaPaperclip /></label>
                                                                        <input type="file" name="photo" id="upload-photo" ref={this.fileInput} onChange={this.handleFileSelect} />
                                                                        <p className="filesize">
                                                                            <span><FaInfoCircle className="attention" /></span>
                                                                            JPEG, JPG, PNG, MS Word, PDF File Size 1MB Each                                                                              </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="action">
                                                        <input type="submit" value="cancel" />
                                                        <input type="submit" value="submit" onClick={this.handleLeaveRequest} />
                                                    </div>
                                                    <div>
                                                        
                                                    </div>
                                                    
                                                </form>
                                            </div>
                                        </div>
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
export default EditRequest;