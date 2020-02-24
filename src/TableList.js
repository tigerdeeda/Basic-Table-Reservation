import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.handleReserveClick = this.handleReserveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.state = {isReserved: true};
  }

  handleReserveClick() {
    this.setState({isReserved: false});
  }

  handleCancelClick() {
    this.setState({isReserved: true});
  }

  render() {

    const table = [
      {tableno:1, seat:2},
      {tableno:2, seat:2},
      {tableno:3, seat:4},
      {tableno:4, seat:4},
      {tableno:5, seat:2},
      {tableno:6, seat:2},
      {tableno:7, seat:4},
      {tableno:8, seat:4},
      {tableno:9, seat:6},
      {tableno:10, seat:6},
      {tableno:11, seat:6},
      {tableno:12, seat:6}
    ]

    const isReserved = this.state.isReserved;
    let button;

    if (isReserved) {
     button = <ReserveButton onClick={this.handleReserveClick} />;
    } else {
     button = <CancelButton onClick={this.handleCancelClick} />;
    }

    return (
      <div className="row">
        {table.map((item) => {
          return(
            <div key={item.tableno} className="col-lg-3 col-sm-4 mt-2">
              <div className = "card">
                <div className="card-header text-right">
                  {button}
                </div>
                <div className="card-body">
                  <dl className="row">
                    <dt className="col-6"> โต๊ะที่: </dt>
                    <dd className="col-6"> {item.tableno} </dd>
                    <dt className="col-6"> จำนวนที่นั่ง: </dt>
                    <dd className="col-6"> {item.seat} </dd>
                  </dl>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );

    function ReserveButton(props) {
      return (
        <button onClick={props.onClick} className="btn btn-success btn-sm"> จองโต๊ะ </button>
      );
    }

    function CancelButton(props) {
      return (
        <button onClick={props.onClick} className="btn btn-success btn-sm"> ยกเลิกจอง </button>
      );
    }

  }
}
export default TableList;
