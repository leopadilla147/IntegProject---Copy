import { Dropdown, DropdownButton } from 'react-bootstrap';

function Overview() {
  return (
      <div className="mb-3">
          <h2>Overview of Results</h2>
          <DropdownButton id="dropdown-basic-button" title="Select Office">
              <Dropdown.Item href="#/action-1">Registrar Office</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Admission Office</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Guidance Office</Dropdown.Item>
          </DropdownButton>
          <img src="/path-to-word-cloud.png" alt="Word Cloud" className="img-fluid mt-3" />
      </div>
  )
}

export default Overview
