import React, { Component } from 'react';
import './Receptionist.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class VD extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName:'',
            age: '',
            open: false,
            active_com2: false
        };
        this.onChange = this.onChange.bind(this);
    }


     onChange(e){
       this.setState({[e.target.name]:e.target.value});
      }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };
   
    render() {
        
        return (
            <div id= 'child'>
                <div className="com2" >
                <h4>Thêm đợt khám</h4>
                    <label>Tên bệnh nhân</label>
                    <FormControl>
                        <Select
                            displayEmpty
                            open={this.state.open}
                            onClose={this.handleClose}
                            onOpen={this.handleOpen}
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'demo-controlled-open-select',
                            }}
                        >
                            <MenuItem value="" disabled>
                                Tên bệnh nhân
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                    </FormControl>
                    <label>Thông tin bệnh</label>
                    <input type="text" ref="infor" name="ThongTinBenh" placeholder="ThongTinBenh" onChange={this.onChange} />

                    <input type="submit" className="button" value="Add" onClick={this.add} />
                    <input type="submit" className="button" value="Reset" onClick={this.reset} />
                </div>
                
            </div>

        );
    }
}

export default VD;