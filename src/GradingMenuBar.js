import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import logo from './logo.svg';
import './App.css';
import LogoHomeNav from './LogoHomeNav.js';
import { saveGradedStudentWork } from './TeacherInteractiveGrader.js';
import { studentSubmissionsZip } from './TeacherInteractiveGrader.js';

var SET_TO_VIEW_GRADES = 'SET_TO_VIEW_GRADES';
// the state resulting from above ttanstion action
var VIEW_GRADES = 'VIEW_GRADES';
var NAV_BACK_TO_GRADING = 'NAV_BACK_TO_GRADING';

var ASSIGNMENT_NAME = 'ASSIGNMENT_NAME';
var SET_ASSIGNMENT_NAME = 'SET_ASSIGNMENT_NAME';

const GradingMenuBar = React.createClass({
    render: function() {
        var assignmentName = this.props.value[ASSIGNMENT_NAME];
        if (typeof(assignmentName) === "undefied" || assignmentName == null) {
            assignmentName = "";
        }
        return (
            <div className="menuBar">
                <div className="nav">
                    <LogoHomeNav /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={{float:"left", verticalAlign:"top", marginTop:"5px", lineHeight : 1}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Assignment Name &nbsp;&nbsp;
                        <input type="text" id="assignment-name-text" size="35" name="assignment name" value={this.props.value[ASSIGNMENT_NAME]} onChange={
                            function(evt) {
                                window.store.dispatch({type : SET_ASSIGNMENT_NAME, ASSIGNMENT_NAME : evt.target.value});
                            }}
                        />&nbsp;&nbsp;
                        <input type="submit" id="save-graded-assignments" value="Save graded" onClick={
                            function() {
                                saveGradedStudentWork(window.store.getState());
                            }
                        }/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="submit" id="view-grades" value="View grades" onClick={
                            function() {
								window.location.hash = '';
                                document.body.scrollTop = document.documentElement.scrollTop = 0;
								window.store.dispatch({type : SET_TO_VIEW_GRADES});
							}
                        }/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="submit" id="scroll-to-top" value="Scroll to top" onClick={
                            function() {
                                window.location.hash = '';
                                document.body.scrollTop = document.documentElement.scrollTop = 0;}
                        }/>
                    </div>
                </div>
            </div>
        );
    }
});

export const ModalWhileGradingMenuBar = React.createClass({
    render: function() {
        return (
            <div className="menuBar">
                <div className="nav">
                    <LogoHomeNav /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={{float:"left", verticalAlign:"top", marginTop:"5px", lineHeight : 1}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="submit" id="back-to-grading" value="Back to grading" onClick={
                            function() {window.store.dispatch({type : NAV_BACK_TO_GRADING})}
                        }/>
                    </div>
                </div>
            </div>
        );
    }
});

export default GradingMenuBar;