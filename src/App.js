import logo from './logo.svg';
import './App.css';
import Item from './CustomComponent/item'
import ItemDate from './CustomComponent/itemDate'
import Card from './CustomComponent/card'
function App() {
  const response = [
    {
      name:"Dabba 1",
      date:"29",
      month:"july",
      year:"1999"
    },
    {
      name:"Dabba 2",
      date:"293",
      month:"july2",
      year:"19993"
    },
    {
      name:"Dabba 3",
      date:"294",
      month:"july6",
      year:"19997"
    },
  ]
  return (
    <div>
      <Card>
      <Item name={response[0].name}></Item>
      <ItemDate date={response[0].date} month={response[0].month} year={response[0].year}></ItemDate>
      <Item name={response[1].name}></Item>
      <ItemDate date={response[1].date} month={response[1].month} year={response[1].year}></ItemDate>
      <Item name={response[2].name}></Item>
      <ItemDate date={response[2].date} month={response[2].month} year={response[2].year}></ItemDate>
      </Card>
      <div className="App">
        Hello World
      </div>
    </div>
  );
}

export default App;
