import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import MyTab from "./MyTab";

const styles = {
  modal: {
    dialog: {
      "max-width": "700px"
    }
  }
};

class MyModal extends Component {
  render() {
    return (
      <Modal.Dialog style={styles.modal.dialog}>
        <Modal.Body style={{ paddingTop: "0px" }}>
          <MyTab />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light">Decline</Button>
          <Button variant="success">Accept</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default MyModal;
