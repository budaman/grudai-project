import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

class Payments extends Component {
  render() {
    return (
      <div className="statistic-container">
        <div className="stats-window-big">
          <div className="green-message margin-top">
            Visi užsakymai apmokėti.
          </div>

          <h5>Užsakymų istorija</h5>
          <div className="stats-cont">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Order</TableHeaderColumn>
                  <TableHeaderColumn>Order date</TableHeaderColumn>
                  <TableHeaderColumn>Total Amount</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableRowColumn>1523</TableRowColumn>
                  <TableRowColumn>17.12.2017</TableRowColumn>
                  <TableRowColumn>
                    <span style={{ color: "#5dc089" }}>2.253.52 €</span>
                  </TableRowColumn>
                  <TableRowColumn>
                    <span className="status-table-label">In Progress</span>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>1128</TableRowColumn>
                  <TableRowColumn>16.12.2017</TableRowColumn>
                  <TableRowColumn>
                    <span style={{ color: "#5dc089" }}>1.147.58 €</span>
                  </TableRowColumn>
                  <TableRowColumn>
                    <span className="status-table-label">In Progress</span>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>4258</TableRowColumn>
                  <TableRowColumn>13.12.2017</TableRowColumn>
                  <TableRowColumn>
                    <span style={{ color: "#5dc089" }}>2.253.52 €</span>
                  </TableRowColumn>
                  <TableRowColumn>
                    <span className="status-table-label">In Progress</span>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>8967</TableRowColumn>
                  <TableRowColumn>06.12.2017</TableRowColumn>
                  <TableRowColumn>
                    <span style={{ color: "#5dc089" }}>573.22 €</span>
                  </TableRowColumn>
                  <TableRowColumn>
                    <span style={{ color: "#698eab" }}>Finished</span>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>1597</TableRowColumn>
                  <TableRowColumn>01.12.2017</TableRowColumn>
                  <TableRowColumn>
                    <span style={{ color: "#5dc089" }}>127.87 €</span>
                  </TableRowColumn>
                  <TableRowColumn>
                    <span style={{ color: "#698eab" }}>Finished</span>
                  </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Payments;
