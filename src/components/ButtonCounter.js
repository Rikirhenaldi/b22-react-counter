import React from 'react'

class ButtonCounter extends React.Component{
    state = {
        counter : 0,
    }
    SumCount = () =>{
      if(this.state.counter >= 10){
        window.alert("can't increase number more than 10")
      }else{
        this.setState({
            counter: this.state.counter + 1
          })
      }
    }
    MinCount = () =>{
        if(this.state.counter <= 0){
            window.alert("can't decrease number less than 0")
        }else{
            this.setState({
                counter: this.state.counter - 1
              })
        }
      }
    render(){
        return(
            <div className= "containerBox">
                <div className="boxRemote">
                <div>
                    {this.props.BoxTitle}
                </div>
                <div className="countingbox">
                    <button onClick= {this.MinCount}>-</button>
                    <h2 className="num">{this.state.counter}</h2>
                    <button onClick= {this.SumCount}>+</button>
                </div>
                </div>
            </div>
        )
    }
}

export default ButtonCounter