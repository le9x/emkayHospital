import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Sidebar from "../../../Sidebar/Sidebar";
import '../../Patient.css';
import { Link } from '@material-ui/core';
import {Route} from 'react-router-dom';
import Ho_so_kham_benh from './Ho_so_kham_benh';

class Home extends Component {


  constructor(props) {
    super(props);

    this.state = {
      result:[],
      id:'',
      redirectHSKB:'',
      redirectToReferrer: false,
      listSidebar: [{ text: "Home", path: "/patients/patient" },
                    { text: "Lịch sử khám bệnh", path: "/patients/patient/history" },
                    { text: "Lịch tái khám", path: "/patients/patient/lich_tai_kham" },
                    { text: "Đặt lịch khám", path: "/patients/patient/dat_lich_kham" },
                    { text: "Góp ý", path: "/patients/patient/gopy" }],
    };
    this.componentWillMount= this.componentWillMount.bind(this);
    this.handleStatus= this.handleStatus.bind(this);
  }

  componentWillMount() {
    var proxy = 'https://doanhttt.herokuapp.com/'
    var id= sessionStorage.getItem('id_patient');
    var apiadd = 'http://168.61.49.94:8080/DOANHTTT/rest/recip/getDotKhamByIdBenhNhan?idBenhNhan='+id;
    fetch(proxy+apiadd,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': '',
          'Token' : sessionStorage.getItem('userData'),
        },
    })
    .then(response =>  response.json())
    .then(resData => {
       console.log(resData);
       console.log("id :"+id);
       this.setState({result:resData.result});
    })
  }
  hoSoKhamBenh(idDK){
    this.setState({redirectHSKB: true,id: idDK});
    sessionStorage.setItem("idDK",idDK);
  }
  handleStatus(status){
    if(status == 0){
      return "Chưa xong"
    }else{
      return "Đã xong"
    }
  }
  render() {
    const {result} = this.state;
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'} />)
    }
    if(this.state.redirectHSKB){
        return (<Redirect to={`${this.props.match.path}/${this.state.id}`} />)
    }
    
    return (
      <div className="row">
        <Sidebar listSidebar={this.state.listSidebar}/>
        <h3>Danh sách đợt khám</h3>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Thông tin bệnh</th>
              <th>Ngày khám</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {result.map((row, index)=>(
              <tr>
                <td>{index+1}</td>
                <td><Link onClick= {()=>this.hoSoKhamBenh(row.IdHoSoDotKham)}>{row.ThongTinBenh}</Link></td>
                <td>{row.NgayKham}</td>
                <td>{this.handleStatus(row.Status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
