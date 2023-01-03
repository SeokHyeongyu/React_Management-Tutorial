import './App.css';
import Customer from './components/Customer';

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
  return (
    <div>
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
    </div>
  );
}

export default App;
