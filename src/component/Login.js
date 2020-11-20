import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
 import {Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {
    Collapse,Input,Row,
    Navbar,Toast,ToastHeader,
    NavbarToggler,ToastBody,
    NavbarBrand,Col,Form,
    DropdownItem,Card,CardText,Button,CardTitle,
    NavbarText,NavLink
  } from 'reactstrap';
  import './component.css'
  import { BrowserRouter as  Router , Link} from 'react-router-dom';
function Login({history}) {
    const [input, setInput] = useState('')
    const [show, setShow] = useState(false)
    const [otp, setOtp] = useState('')
    const [check, setCheck] = useState(false)
    const min = 199
    const max = 965
    let random = min*max 
    /* let history = useHistory(); */
    const checkinput = () => {
        
        if(!input){
            alert('please fill mobile number')
        }
        else{
            setShow(!show)
        }
    }
    const fill = () => {
        if(otp == random){
            setCheck(!check)
        }
        else{
            alert('otp not matched')
        }
    }


     


    return (
        <div>
            <Row>
            <Col md="3">
            
            </Col>
            <Col md="6">
            <Card body id="login-outer-card"> 
                <h4 className="d-flex">LOGIN</h4>
                
                <Input placeholder="Email/Username/Mobile" id="input" name="input" onChange={(e) => setInput(e.target.value)} />
                <Row className=""><Input placeholder="Enter OTP"  id="input1"  onChange={(e) => setOtp(e.target.value)} className="" /> <Button className="otp-btn" onClick ={checkinput}>Send OTP</Button></Row>
                <Button className="mt-4 mx-auto" style={{width:'20%'}} onClick = {fill}>Check otp</Button>
                { check ? <NavLink href= "/home"><Button id="button" >Login</Button></NavLink> : null}
               
            </Card>
            </Col>
            <Col md="3">
            <Toast isOpen={show} className="mt-4">
                <ToastHeader toggle={checkinput}>Here is your OTP</ToastHeader>
                <ToastBody>
                    {random}
                </ToastBody>
            </Toast>
            </Col>
            </Row>
        </div>
    )
}

export default Login
