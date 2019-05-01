import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Home from "./KhamBenh/KhamBenh";
import KhamTheoCa from "./KhamBenh/KhamTheoCa";


class SpecialistDoctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listSidebar: [{text: "Home", path: "/doctor"},
                    {text: "Thêm hồ sơ khám bệnh", path: "/doctor/hoso"},
                    {text: "Lịch trực", path: "/doctor/lichtruc"}],
      redirectToReferrer: false,
    };
  }

  componentWillMount() {


  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'}/>)
    }
    return (
      <div>
            <Route exact path={this.props.match.path} component={Home} />
            <Route path={`${this.props.match.path}/:id`} component={KhamTheoCa} />
      </div>
    );
  }
}

export default SpecialistDoctor;
