import axios from 'axios';
import React, { Component } from 'react';
import { FaFlag, FaUndo,FaGreaterThan, FaRegCalendarCheck, FaInfoCircle, FaPaperclip, FaGlobeAmericas, FaFemale } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import male from '../../images/Artboard_2-512.png';
import Table from '../../component/tableannualleave/Table';
import ReturnedUser from '../../component/returneduser/ReturnedUser';
import DatePicker from "react-datepicker";
import './PostLeaveRequest.scss';
class PostLeaveRequest extends Component {
    userLeaveRequestData;
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            user:{},
            setTermSearch: "",
            isOpen : false,
            leaveType: '',
            replacement: '',
            guarantor: '',
            selectedFile: '',
            fileselected: '',
            leaveDate: "",
            rejoinDate: '',
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            daysNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            setTime: new Date().getDate() + ',' + new Date().getFullYear(),
            abroadValue: "Abroad",
            localValue: "Local",
            yesValue : "yes",
            noValue :"no",
            leaveToAvail: this.props.location.request?.leaveToAvail || "Local" ,
            requireLeaveSalaryAdvance: "No",
            email:'' || "",
            address :'',
            contactNo :'',
            numberDays :'',
            remarks : '',
            dataReturnFromUser:[],
            leavedateError: "",
            rejoinError: "",
            emailError: "",
            contactNoError: "",
            addressError: "",
            numberError:"",
            typeLeaveError:"",
            guarantorError:"",
            replacementError: "",
            request: this.props.location.request || {},
            requestnuberday: this.props.location.request?.numberDays ,
            requestleavetype: this.props.location.request?.leaveType ,
            requestdateleave: this.props.location.request?.leaveDate,
            requestrejoinDate : this.props.location.request?.rejoinDate,
            requestnumberDays : this.props.location.request?.numberDays,
            requestleaveType : this.props.location.request?.leaveType,
            requestguarantor : this.props.location.request?.guarantor,
            requestreplacement : this.props.location.request?.replacement,
            requestaddress : this.props.location.request?.address,
            requestcontactNo : this.props.location.request?.contactNo,
            requestemail : this.props.location.request?.email,
            requestremarks : this.props.location.request?.remarks,
            requestleavetoavail : this.props.location.request?.leaveToAvail,
            requestfileselected : this.props.location.request?.fileselected,
            requestreqNo: this.props.location.request?.reqNo,
            requestimageSrc: this.props.location.request?.imageSrc || male,
            requestcode : this.props.location.request?.code,
            requestemployeeName : this.props.location.request?.employeeName,
            requestjobTitle : this.props.location.request?.jobTitle,
            requestSalaryProfile : this.props.location.request?.SalaryProfile,
            requestjoiningDate:this.props.location.request?.joiningDate,
            requestlocation:this.props.location.request?.location,
            requestactualleaving : this.props.location.request?.actualleaving,
            //requestNum: Number || this.state.request.reqNo ,
            showError:false,
            showRejoinError:false,
            showEmailError:false,
            showContactNoError:false,
            showAddressError:false,
            showNumberError:false,
            showLeaveTypeError:false, 
            showguarantorError:false,
            showreplacementError: false,
            requestNumberdays:"",
            requeststatus:["final-level-approved","hold","returned","underapproval","closed-transaction","request-level"]
          };
          this.handleChangeSearchTerm = this.handleChangeSearchTerm.bind(this);
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
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeSearchTerm = (e) => {
        this.setState({setTermSearch: e.target.value});
        this.setState({isOpen: e.target.value.length > 0 && true });
    }
    handleLeaveTypeChange= (e) => {
        this.setState({ leaveType: e.target.value });
        this.setState({ requestleavetype: e.target.value });
        this.setState({showLeaveTypeError:false});
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
        this.setState({ requestnuberday: e.target.value });
        this.setState({showNumberError:false});
    }
    handleChangereplacement = (e) => {
        this.setState({ replacement: e.target.value });
        this.setState({ requestreplacement: e.target.value });
        this.setState({showreplacementError:false});
    }
    handleChangeguarantor = (e) => {
        this.setState({ guarantor: e.target.value });
        this.setState({ requestguarantor: e.target.value });
        this.setState({showguarantorError:false});
    }
    handleChangLeaveDate = (e) => {
        this.setState({ leaveDate: e.target.value});
        this.setState({requestdateleave : e.target.value})
        this.setState({showError:false});
    }
    handleChangrejoinDate = (e) => {
        this.setState({ rejoinDate: e.target.value });
        this.setState({ requestrejoinDate: e.target.value });
        this.setState({showRejoinError:false});
    }
    handleChangeAddress = (e) => {
        this.setState({ address: e.target.value });
        this.setState({ requestaddress: e.target.value });
        this.setState({showAddressError:false});
    }
    handleChangeEmail = (e) => {
        this.setState({ requestemail: e.target.value });
        this.setState({ email: e.target.value });
        this.setState({showEmailError:false});
    }
    handleChangeContactNo = (e) => {
        this.setState({ contactNo: e.target.value });
        this.setState({ requestcontactNo: e.target.value });
        this.setState({showContactNoError:false});
    }
    handleChangeRemarks= (e) => {
        this.setState({ remarks: e.target.value });
        this.setState({ requestremarks: e.target.value });
    }
    fetchedUser = (user) =>{
        console.log("Fetched User" , user);
        this.setState({user});
    }
    handleFileSelect = (e) => {
        if (this.fileInput.current.files[0].size > 1e6) {
            window.alert("Please upload a file smaller than 1 MB");
            this.setState({ fileselected: "Upload another file" });
            return false;
        }else{
         this.setState({ fileselected: this.fileInput.current.files[0].name });
        }
    }
    validate = ()=>{
        let leavedateError = "";
        let emailError = "";
        let addressError = "";
        let contactNoError = "";
        let rejoinError = "";
        let numberError = "";
        let leaveTypeError = "";
        let guarantorError ="";
        let replacementError="";
        if(!this.state.leaveDate){
            leavedateError = "Leave Date is Required";
        }
        if(this.state.requestemail==="" || this.state.requestemail===" " || !this.state.email){
            emailError = "Email is Required";
        }
        if(!this.state.address){
            addressError = "Address is Required";
        }
        if(!this.state.contactNo){
            contactNoError = "Contact Number is Required";
        }
        if(!this.state.rejoinDate){
            rejoinError = "Rejoin Date is Required";
        }
        if(!this.state.numberDays){
            numberError = "Number Of Days is Required";
        }
        if(!this.state.leaveType){
            leaveTypeError= "Leave Type is Required";
        }
        if(!this.state.guarantor){
            guarantorError= "Guarantor is Required";
        }
        if(!this.state.replacement){
            replacementError= "Replacement is Required";
        }
        if(emailError || leavedateError || contactNoError || addressError || rejoinError || numberError || leaveTypeError || guarantorError || replacementError){
            this.setState({emailError , leavedateError , addressError , contactNoError , rejoinError , numberError , leaveTypeError , guarantorError , replacementError});
            this.setState({showError:true});
            this.setState({showEmailError:true});
            this.setState({showContactNoError:true});
            this.setState({showAddressError:true});
            this.setState({showRejoinError:true});
            this.setState({showNumberError:true});
            this.setState({showLeaveTypeError:true});
            this.setState({showguarantorError:true});
            this.setState({showreplacementError:true});
            return false;
        }
        return true;
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        let isValid = this.validate();
        const requests = JSON.parse(localStorage.getItem('requests')) || [] ;
        if(this.props.location.request? isValid=true : isValid = this.validate()) ;
        if(isValid){
            const user = {
                reqNo: Math.floor((Math.random() * 1000) + 1) || this.state.requestreqNo,
                imageSrc: this.state.user.ImageSrc || this.state.requestimageSrc || male,
                code : this.state.user.Code || this.state.requestcode ,
                employeeName : this.state.user.EmployeeName || this.state.requestemployeeName,
                jobTitle : this.state.user.JobTitle || this.state.requestjobTitle,
                SalaryProfile : this.state.user.SalaryProfile || this.state.requestSalaryProfile ,
                joiningDate:this.state.user.JoiningDate || this.state.requestjoiningDate,
                location:this.state.user.location || this.state.requestlocation,
                actualleaving : this.state.user.Actualleaving || this.state.requestactualleaving,
                leaveToAvail  : this.state.leaveToAvail || this.state.requestleavetoavail ,
                requireLeaveSalaryAdvance : this.state.requireLeaveSalaryAdvance,
                leaveDate : this.state.leaveDate || this.state.requestdateleave,
                rejoinDate : this.state.rejoinDate || this.state.requestrejoinDate,
                numberDays : this.state.numberDays || this.state.requestnuberday,
                leaveType : this.state.leaveType || this.state.requestleaveType,
                guarantor : this.state.guarantor || this.state.requestguarantor,
                replacement : this.state.replacement || this.state.requestreplacement,
                address : this.state.address || this.state.requestaddress,
                contactNo : this.state.contactNo || this.state.requestcontactNo,
                email : this.state.email || this.state.requestemail,
                remarks : this.state.remarks || this.state.requestremarks,
                fileselected : this.fileInput.current.files[0].name || this.state.requestrequestfileselected,
                requestStatus: this.state.requeststatus[Math.floor(Math.random() * this.state.requeststatus.length)]
            }
            alert("request saved")
            console.log(requests);
            requests.map(request =>{
                if(request.code == user.code && request.leaveType == user.leaveType){ 
                    requests.splice(request, 1);
                }
                else{
                    
                }
            });
            requests.push(user);
            localStorage.setItem("requests", JSON.stringify(requests));
            this.setState({user:{}});
            this.setState({request:{}});
            this.setState({leaveToAvail : "Local"});
            this.setState({requireLeaveSalaryAdvance : "No"});
            this.setState({leaveDate : ''});
            this.setState({rejoinDate : ''});
            this.setState({numberDays : ''});
            this.setState({leaveType : ''});
            this.setState({guarantor : ''});
            this.setState({replacement : ''});
            this.setState({address : ''});
            this.setState({contactNo : ''});
            this.setState({email : ''});
            this.setState({remarks: ''});
            this.setState({fileInput : ''});
            this.setState({requestnuberday: ''});
            this.setState({requestleavetype: ''});
            this.setState({requestdateleave: ''});
            this.setState({requestrejoinDate : ''});
            this.setState({requestnumberDays : ''});
            this.setState({requestleaveType : ''});
            this.setState({requestguarantor : ''});
            this.setState({requestreplacement : ''});
            this.setState({requestaddress : ''});
            this.setState({requestcontactNo : ''});
            this.setState({requestemail : ''});
            this.setState({requestremarks : ''});
    }
} 
    toggle =()=>{
        this.setState({isOpen:false})
    }
    handleButtonAddSubmitt(e){
        e.preventDefault();
        const isValid = this.validate();
        const requests = JSON.parse(localStorage.getItem('requests')) || [] ;
        if(this.props.location.request? isValid=true : isValid = this.validate()) ;
        if(isValid){
            const user = {
                reqNo: Math.floor((Math.random() * 1000) + 1),
                imageSrc: this.state.user.ImageSrc || male,
                code : this.state.user.Code,
                employeeName : this.state.user.EmployeeName,
                jobTitle : this.state.user.JobTitle,
                SalaryProfile : this.state.user.SalaryProfile,
                joiningDate:this.state.user.JoiningDate,
                location:this.state.user.location,
                actualleaving : this.state.user.Actualleaving,
                leaveToAvail  : this.state.leaveToAvail ,
                requireLeaveSalaryAdvance : this.state.requireLeaveSalaryAdvance,
                leaveDate : this.state.leaveDate,
                rejoinDate : this.state.rejoinDate,
                numberDays : this.state.numberDays,
                leaveType : this.state.leaveType,
                guarantor : this.state.guarantor,
                replacement : this.state.replacement,
                address : this.state.address,
                contactNo : this.state.contactNo,
                email : this.state.email,
                remarks : this.state.remarks,
                fileselected : this.fileInput.current.files[0].name
            }
            alert("request saved")
            console.log(requests);
            requests.map(request =>{
                if(request.code == user.code && request.leaveType == user.leaveType){ 
                    requests.splice(request, 1);
                }
                else{
                    
                }
            });
            requests.push(user);
            localStorage.setItem("requests", JSON.stringify(requests));
        }
    }
    componentDidMount(){
        this.setState({requestNumberdays : this.state.request.numberDays});
    }
    render() {
        console.log(this.props)
        console.log(this.props.location.request);
        console.log("fields",this.state.request.numberDays);
        console.log("path",this.props.location.pathname);
        return (
            <div className="postleaverequest">
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
                                    <div className="col-md-9 col-12">
                                        <div className="search">
                                            <div className="row">
                                                <div className="col-lg-1 col-md-2 col-3">
                                                    <div className="img-bar">
                                                        <FaGlobeAmericas />
                                                    </div>
                                                </div>
                                                <div className="col-lg-11 col-md-10 col-9">
                                                    <div className="search-bar col-lg-6 col-md-8 col-11">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" placeholder="Search Employe Name, Code, or Job Title" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.setTermSearch} onChange={this.handleChangeSearchTerm}/>
                                                            <span className="input-group-text" id="basic-addon2"><FaUndo className="undo-icon" /></span>
                                                        </div>
                                                        <div className={this.state.isOpen ? "disable show-data" : "disable"} onClick={this.toggle}>
                                                          <ReturnedUser searchterm={this.state.setTermSearch} onSelectedUser={this.fetchedUser}/> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="empolyee-info">
                                            <div className="card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-2">
                                                        <div className="card-avatar">
                                                            <img src={this.state.request.imageSrc || this.state.user.ImageSrc || male} alt="..." />
                                                        </div>
                                                    </div>
                                                    <div className="col-10 body--border">
                                                        <div className="card-body">
                                                           
                                                            <ul>
                                                            <h6>{this.state.request.code || this.state.user.Code} {this.state.request.employeeName || this.state.user.EmployeeName}</h6>
                                                                <li><span>Job Title</span> <span>{this.state.request.jobTitle || this.state.user.JobTitle}</span></li>
                                                                <li><span>Salary profile </span><span>{this.state.request.SalaryProfile || this.state.user.SalaryProfile}</span></li>
                                                                <li><span>Joining Date </span><span>{this.state.user.JoiningDate || this.state.request.joiningDate}</span></li>
                                                                <li><span> Location </span> {this.state.user.location || this.state.request.location}
                                                                 <span style={{marginLeft:"0px"}}><FaGreaterThan className={this.props.location.request || this.state.user.Code? "show":"disable"}/></span> {this.state.request.jobTitle || this.state.user.JobTitle} <span style={{marginLeft:"0px"}}><FaGreaterThan className={this.props.location.request || this.state.user.Code? "show":"disable"}/></span> {this.state.request.SalaryProfile || this.state.user.SalaryProfile}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="leaverequest-form">
                                            <div className="container-fluid">
                                                <div className="form">
                                                    <form onSubmit={this.handleSubmit}>
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
                                                                                    onChange={this.handleChangeRadio} checked={this.state.leaveToAvail === "Abroad"}/>Abroad
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check form-check-inline">
                                                                            <label className="form-check-label">
                                                                                <input className="form-check-input" type="radio" name="Avail" id="Local" value={this.state.localValue} onChange={this.handleChangeRadioLocal} checked={this.state.leaveToAvail === "Local"}/>Local
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
                                                                            <input type="date"  className="text-left" id="leavedate" name="leavedate" onChange={this.handleChangLeaveDate} defaultValue={this.state.requestdateleave || "2021-08-26"}/>
                                                                            <div className={this.state.showError ? "show-error" : "disable"} style={{color:"red" , fontSize:"14px"}}><FaInfoCircle/> {this.state.leavedateError}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-5 col-12">
                                                                        <div className="row">
                                                                            <div className="col-xl-6 col-lg-4  col-md-6 col-12">
                                                                                <label htmlFor="rejoiningdate">Expected Rejoining Date</label>
                                                                            </div>
                                                                            <div className="col-xl-6 col-lg-8 col-md-6 col-12">
                                                                                <input type="date" id="rejoiningdate" name="rejoiningdate" onChange={this.handleChangrejoinDate} defaultValue={this.state.requestrejoinDate || "2021-08-26"} />
                                                                                <div className={this.state.showRejoinError ? "show-error" : "disable"} style={{color:"red" , fontSize:"14px"}}><FaInfoCircle/> {this.state.rejoinError}</div>
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
                                                                                <select className="form-select" id="selectleavetype" value={this.state.requestleavetype} onChange={this.handleLeaveTypeChange}>
                                                                                    <option>{"--select Type Of Leave--"} </option>
                                                                                    <option>business</option>
                                                                                    <option>moment</option>
                                                                                    <option>weakness</option>
                                                                                    <option>pleasures</option>
                                                                                    <option>endures</option>
                                                                                    <option>circumstances</option>
                                                                                    <option>pleasures</option>
                                                                                </select>
                                                                                <div className={this.state.showLeaveTypeError ? "show-error" : "disable"} style={{color:"red" , fontSize:"14px"}}><FaInfoCircle/> {this.state.leaveTypeError}</div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-12 number-days">
                                                                                <label className="form-check-label" htmlFor="numberdays">
                                                                                    No. Of Days
                                                                                    </label>
                                                                                <input type="number" className="form-control" id="numberdays" name="Enter Numb" min="1" value={this.state.requestnuberday } onChange={this.handleChangeNumberDays}/>
                                                                                <div className={this.state.showNumberError ? "show-error" : "disable"} style={{color:"red" , fontSize:"14px"}}><FaInfoCircle/> {this.state.numberError}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button type="submit" onSubmit={()=> this.handleButtonAddSubmitt}>
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
                                                                                <select className="form-select" id="selectguarantor" aria-label="select an option" value={this.state.requestguarantor} onChange={this.handleChangeguarantor}>
                                                                                    <option> --Select an Option--</option>
                                                                                    <option>saepe eveniet </option>
                                                                                    <option>reiciendis voluptatibus</option>
                                                                                    <option>similique sunt</option>
                                                                                    <option>every pain avoided</option>
                                                                                    <option>praesentium voluptatum</option>
                                                                                </select>
                                                                                <div className={this.state.showguarantorError ? "show-error" : "disable"} style={{color:"red" , fontSize:"14px"}}><FaInfoCircle/> {this.state.guarantorError}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-12">
                                                                        <div className="replacement">
                                                                            <div className="replacement-header">
                                                                                <label htmlFor="selectreplacement" className="col-12">Replacement</label>
                                                                            </div>
                                                                            <div className="col-10 replacement-selection">
                                                                                <select className="form-select" id="selectreplacement" aria-label="select an option" value={this.state.requestreplacement} onChange={this.handleChangereplacement}>
                                                                                    <option>--Select an Option--</option>
                                                                                    <option>majority</option>
                                                                                    <option>reproduced</option>
                                                                                    <option>undoubtable</option>
                                                                                    <option>consectetur</option>
                                                                                    <option>passage</option>
                                                                                    <option>combined</option>
                                                                                </select>
                                                                                <div className={this.state.showreplacementError ? "show-error" : "disable"} style={{color:"red" , fontSize:"14px"}}><FaInfoCircle/> {this.state.replacementError}</div>
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
                                                                                        <input type="text" className="form-control" id="inputaddress" value={this.state.requestaddress } onChange={this.handleChangeAddress}/>
                                                                                        <div className={this.state.showAddressError ? "show-error" : "disable"} style={{color:"red" , fontSize:"14px"}}><FaInfoCircle/> {this.state.addressError}</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="row mb-3">
                                                                                    <label htmlFor="inputphone" className="col-lg-4 col-12 col-form-label">Contact No.</label>
                                                                                    <div className="col-lg-8 col-12">
                                                                                        <input type="phone" className="form-control" id="inputphone" value={this.state.requestcontactNo} onChange={this.handleChangeContactNo} />
                                                                                        <div className={this.state.showContactNoError ? "show-error" : "disable"} style={{color:"red" , fontSize:"14px"}}><FaInfoCircle/> {this.state.contactNoError}</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="row mb-3">
                                                                                    <label htmlFor="inputEmail3" className="col-lg-3 col-12 col-form-label">Email</label>
                                                                                    <div className="col-lg-9 col-12">
                                                                                        <input type="email" className="form-control" id="inputEmail3" value={this.state.requestemail || this.state.email} onChange={this.handleChangeEmail}/>
                                                                                        <div className={this.state.showEmailError ? "show-error" : "disable"} style={{color:"red" , fontSize:"14px"}}> {this.state.emailError}</div>
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
                                                                            <textarea id="remarks-message" rows="3" value={this.state.requestremarks} onChange={this.handleChangeRemarks}></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-12">
                                                                    <div className="attatchment">
                                                                        <div className="attatchment-header">
                                                                            <h6>Attatchments</h6>
                                                                        </div>
                                                                        <div className="attatchment-file col-10">
                                                                            <input type="text" className="form-control" id="inputfile" value={ this.state.fileselected || this.state.request.fileselected || ""} required/>
                                                                            <label htmlFor="upload-photo"><FaPaperclip /></label>
                                                                            <input type="file" name="photo" id="upload-photo" ref={this.fileInput} onChange={this.handleFileSelect} required/>
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
                                    <div className="col-md-3 col-12">
                                        <div className="employee-days-table">
                                            <div className="days"><p>Annual Leave Balance as on {this.state.daysNames[new Date().getDay()]}, {this.state.monthNames[new Date().getMonth()]} {this.state.setTime}</p></div>
                                            <Table fetchedUser={this.state.user}/>
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
export default PostLeaveRequest;