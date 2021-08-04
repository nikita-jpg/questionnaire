import React, { useState, useEffect } from 'react';
import './MainBackground.css'

export class MainBackground extends React.Component {
    constructor(props) {
        super(props);
        // this.testFunc = this.testFunc.bind(this);
        // Не вызывайте здесь this.setState()!
        // this.state = { backgroundColor: "transparent" };
      }
    componentDidMount(){
        // console.log("123")
        this.props.testFunc()
        // this.setState({ backgroundColor: "var(--background_content)" })
    }
    //style={{backgroundColor:this.state.backgroundColor}}
    render() {
      return(
        <div className="MainBackground" ></div>
      )		   
    }
  }