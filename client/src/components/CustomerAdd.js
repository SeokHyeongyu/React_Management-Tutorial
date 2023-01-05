import React from "react";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import  {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    hidden: {
        display: 'none'
    }  
});

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
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
        .then((response) => {
            console.log(response);
            this.setState({
                file: null,
                name: '',
                birthday: '',
                gender: '',
                job: '',
                fileName: '',
                open: false
            })
            this.props.stateRefresh();
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
        const url = '/api/customers'
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

    handelClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handelClickClose = () => {
        this.setState({
            file: null,
            name: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <Button variant="contained" color="primary" onClick={this.handelClickOpen}>고객 추가</Button>
                <Dialog open={this.state.open} onClose={this.handelClickClose}>
                    <DialogTitle>고객 추가</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handelFileChang}/>
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="primary" component="span" name="file">
                                {this.state.fileName === "" ? "프로필 이미지 선택" : this.state.fileName}
                            </Button>
                        </label>
                        <br/>
                        <TextField label="이름" type="text" name ="name" value={this.state.name} onChange={this.handelValueChang}/><br/>
                        <TextField label="생년월일" type="text" name ="birthday" value={this.state.birthday} onChange={this.handelValueChang}/><br/>
                        <TextField label="성별" type="text" name ="gender" value={this.state.gender} onChange={this.handelValueChang}/><br/>
                        <TextField label="직업" type="text" name ="job" value={this.state.job} onChange={this.handelValueChang}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handelClickClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}

export default withStyles(styles)(CustomerAdd);