import React, { Component } from 'react'
import styled from 'styled-components';

const ClockBlock = styled.div`
  font-size: 20px;
  text-decoration: underline;
  text-align: right;
`

class Clock extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentTime: new Date(),
      };
      }

      componentDidMount() {
        this.timerId = setInterval(() => {
          this.setState({
            currentTime : new Date(),
          });
        }, 1000);
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }


      render() {
        const { currentTime } =this.state;
        const year = currentTime.getFullYear();
        const month = String(currentTime.getMonth() + 1).padStart(2, '0');
        const day = String(currentTime.getDate()).padStart(2, '0');
        const hours = String(currentTime.getHours()).padStart(2,'0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');

        return (
          <ClockBlock>
          <div>
            {`" Today ${year}/${month}/${day}, Now ${hours}:${minutes}"`}
          </div>
          </ClockBlock>
        )

      }
    }

export default Clock;