import React from "react";
import { Button, Container, Table } from "reactstrap";
import { employeeList } from "./CustomerData";
import { connect } from "react-redux";
import { logout } from "./redux/actions/LoginAction";
import { useHistory } from "react-router-dom";
import "./css/DashBoard.css";

function EmployeeList({ logout }) {
  const history = useHistory();
  const logoutApp = () => {
    logout();
    history.push("/login");
  };
  return (
    <Container fluid style={{ padding: 0 }}>
      <div className="header">
        <h3>Employee List</h3>
        <Button outline color="primary" onClick={logoutApp}>
          Logout
        </Button>
      </div>
      <div className="dashboarddiv">
        <Table responsive striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Id</th>
              <th>Contact</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.user.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phoneNo}</td>
                <td>{emp.age}</td>
                <td>{emp.gender}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
