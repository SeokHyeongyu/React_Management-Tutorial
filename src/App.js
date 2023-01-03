import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { TableBody, TableHead } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

const test = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : 'test',
    'job' : '학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : 'aaa',
    'job' : 'TTTTTTTT'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : 'seok',
    'job' : '학생2'
  }
]
function App() {
  //const { classes } = this.props;
  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
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
                test.map(i => {
                  return (
                    <Customer 
                      key={i.id}
                      id = {i.id}
                      name = {i.name}
                      image = {i.image}
                      job = {i.job}
                    />
                  )
                })
              }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
