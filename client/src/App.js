import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { TableBody, TableHead } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';

const styles = theme => (
  {
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})


class App extends Component {
  state = {
    customers: ""
  }
  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render () {
    const { classes } = this.props
    return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
                this.state.customers ? this.state.customers.map(i => {
                  return (
                    <Customer 
                      key={i.id}
                      id = {i.id}
                      name = {i.name}
                      image = {i.image}
                      job = {i.job}
                    />
                  )
                }) : ""
              }
        </TableBody>
      </Table>
    </Paper>
    )
  }
}

export default withStyles(styles)(App);
