import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getLeads } from "../../actions/index";

class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    const lead = this.props.leads.map((lead) => <div>{lead.name}</div>);
    return (
      <>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { leads: state.leads.leads };
}

export default connect(mapStateToProps, { getLeads })(Leads);
