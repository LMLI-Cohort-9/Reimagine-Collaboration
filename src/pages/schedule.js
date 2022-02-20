import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../components/header';
import Layout from '../components/layout';

function createData(time, event, location) {
    return { time, event, location };
}

const rows = [
    createData("9:00 - 9:45", "Check-In", "Benton Hall Atrium"),
    createData("9:45 - 10:00", "", "Transition to Farmer"),
    createData("10:00 - 10:20", "Welcome: Louise Morman: Executive Director of LMLI, Dr. Gregory Crawford: President of Miami University", "Farmer School of Business 0025"),
    createData("10:20 - 11:05", "Jeff Wilcox: Former Vice President of Digital Transformation at Lockheed Martin", "Farmer School of Business 0025"),
    createData("11:10-11:40", "Breakout Groups", "Farmer School of Business 0024, 0027, 0028, 0031"),
    createData("11:40-12:35", "Lunch", "Farmer School of Business Common Area"),
    createData("12:45-1:30", "Amy Leschke-Kahle: Vice President of Performance Acceleration at the Marcus Buckingham Company", "Farmer School of Business 0025"),
    createData("1:30-1:45", "Break", ""),
    createData("1:45-2:30", "Bryce Williams: Advisor + Workforce Collaboration at Eli Lilly and Company", "Farmer School of Business 0025"),
    createData("2:30-3:00", "Closing Remarks: Dr. Beena Sukumaran- Dean, College of Engineering and Computing", "Farmer School of Business 0025"),
];

/**
 * The class that represents the categories page.
 */
class Categories extends React.Component {
    /**
     * Returns the categories page content that is supposed to be rendered by a
     * user's browser inside a Layout component.
     * @return {*} The categories page content that is supposed to be rendered
     * by a browser.
     */
    render() {
        // Gets the GraphQL page query. This gets the images, title, descriptions,
        // and slugs for all categories.
        const categories = get(this.props, 'data.allContentfulMember.edges');

        return (
            <Layout
                title="Schedule"
                location={this.props.location}>
                <div className="content">
                    <Header text={'Schedule'} applyGradient={true} />
                    <div className="wrapper">
                        <h1 className="section-headline">
                            Schedule for Reimagine Collaboration (EST)
                        </h1>
                        <div className="content schedule" style={{ textAlign: "center" }}>                  
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4> 9:00 - 9:45 </h4> 
                                </Col>
                                <Col md={4}> 
                                    <h3> Check-In </h3>
                                </Col>
                                <Col md={4}>
                                    <h4> Benton Hall Atrium </h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4> 9:45 - 10:00 </h4> 
                                </Col>
                                <Col md={4}>
                                </Col>
                                <Col md={4}> 
                                    <h4> Transition to Farmer </h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4> 10:00 - 10:20 </h4> 
                                </Col>
                                <Col md={4}> 
                                    <h3> Welcome </h3>
                                    <p> Louise Morman - Executive Director of Lockheed Martin Leadership Institute </p>
                                    <p> Dr. Gregory Crawford - President of Miami University </p>
                                </Col>
                                <Col md={4}>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4> 10:20 - 11:05 </h4>
                                </Col>
                                <Col md={4}> 
                                    <h3> Jeff Wilcox </h3>
                                    <p> Former Vice President of Digital Transformation at Lockheed Martin </p>
                                </Col>
                                <Col md={4}>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4> 11:10 - 11:40 </h4> 
                                </Col>
                                <Col md={4}> 
                                    <h3> Breakout Groups </h3>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business 0024, 0027, 0028, 0031</h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4> 11:40 - 12:35 </h4> 
                                </Col>
                                <Col md={4}> 
                                    <h3> Lunch </h3>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business Common Area </h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4> 12:45 - 1:30 </h4> 
                                </Col>
                                <Col md={4}> 
                                    <h3> Amy Leschke-Kahle </h3>
                                    <p> Vice President of Performance Acceleration at the Marcus Buckingham Company </p>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business 0025</h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4> 1:30 - 1:45 </h4>
                                </Col>
                                <Col md={4}> 
                                    <h3> Break </h3>
                                </Col>
                                <Col md={4}>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4> 1:45 - 2:30 </h4>
                                </Col>
                                <Col md={4}> 
                                    <h3> Bryce Williams </h3>
                                    <p> Advisor + Workforce Collaboration at Eli Lilly and Company </p>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business 0025</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}> 
                                    <h4>  2:30 - 3:00 </h4>
                                </Col>
                                <Col md={4}> 
                                    <h3> Closing Remarks </h3>
                                    <p> Dr. Beena Sukumaran - Dean, College of Engineering and Computing </p>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business 0025</h4>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="break" />
            </Layout>
        );
    }
}

// Defines the propTypes of Categories.
Categories.propTypes = {
    location: PropTypes.any,
};

export default Categories;
