import React, { Component } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { privacy, privacyTH, tc, tcTH } from "./Constant";
import marked from "marked";

const styles = {
  root: {
    display: "block"
  },
  container: {
    width: "800px"
  },
  row: {
    marginBottom: "-15px"
  },
  nav: {
    item: {
      textAlign: "left"
    },
    link: {
      textAlign: "left",
      borderRadius: "0"
    }
  },
  tab: {
    textAlign: "left",
    height: "600px",
    "overflow-y": "scroll"
  }
};

class MyTab extends Component {
  getMarkdownTC() {
    var rawMarkup = marked(tcTH, { sanitize: true });
    return { __html: rawMarkup };
  }

  getMarkdownPrivacy() {
    var rawMarkup = marked(privacyTH, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row style={styles.row}>
          <Col
            sm={4}
            style={{
              backgroundColor: "#F4F4F8",
              paddingTop: "15px",
              paddingLeft: "0px",
              paddingRight: "0px"
            }}
          >
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" style={styles.nav.link}>
                  Privacy Policy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item styles={{ textAlign: "left" }}>
                <Nav.Link eventKey="second" style={styles.nav.link}>
                  Term of Service
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8} style={{ paddingRight: "0px", paddingTop: "15px" }}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h4 style={{ textAlign: "left" }}>
                  <strong>Privacy Policy</strong>
                </h4>
                <div style={styles.tab}>
                  <div dangerouslySetInnerHTML={this.getMarkdownPrivacy()} />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h4 style={{ textAlign: "left" }}>
                  <strong>Term and Condition</strong>
                </h4>
                <div style={styles.tab}>
                  <div dangerouslySetInnerHTML={this.getMarkdownTC()} />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default MyTab;
