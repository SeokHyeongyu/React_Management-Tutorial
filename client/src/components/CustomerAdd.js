import React from "react";
import axios from "axios";
//import { response } from "express";

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            name: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
        }
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
        .then((response) => {
            console.log(response);
            this.props.stateRefresh();
        })
        this.setstate = ({
            file: null,
            name: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
        })
    }

    handelFileChang = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handelValueChang = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    
    addCustomer = () => {
        const url = '/api/addCustomer'
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.name);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'Content-type': 'multipart/form-data' //파일데이터 보낼때 헤더 설정
            }
        };
        return axios.post(url, formData, config);
    }
    render() {

        return(
            <form onSubmit={this.handleFormSubmit} >
                <h1>고객 추가</h1>
                프로필 이미지: <input type="file" name ="file" file={this.state.file} value={this.state.fileName} onChange={this.handelFileChang}/><br/>
                이름: <input type="text" name ="name" value={this.state.name} onChange={this.handelValueChang}/><br/>
                생년월일: <input type="text" name ="birthday" value={this.state.birthday} onChange={this.handelValueChang}/><br/>
                성별: <input type="text" name ="gender" value={this.state.gender} onChange={this.handelValueChang}/><br/>
                직업: <input type="text" name ="job" value={this.state.job} onChange={this.handelValueChang}/><br/>
                <button type="submit">추가</button>
            </form>
        )
    }

}

export default CustomerAdd;