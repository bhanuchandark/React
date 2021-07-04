import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');


class App extends React.Component {

    // new method
    state = {
        headerText: 'Name It App',
        headerExpanded: true,
        suggestedNames: []
    };
    /**
     * old method of declaring state
     */
    // constructor(){
    //     super();
    //     this.state = {
    //         headerText: 'Name It'
    //     }
    // }

    handleInputChange = (InputText) =>{
        this.setState({ 
            headerExpanded: !InputText, 
            suggestedNames: name(InputText)
        }) 
        //headerExpanded: InputText.length > 0 ? false:true
        // headerExpanded : !(InputTexr.length>0)
        //headerExpanded : !InputText  
    
    }

    render () {
    return (
        <div>
            <Header 
                headerExpanded = {this.state.headerExpanded}
                headTitle = {this.state.headerText}
            />
            <SearchBox onInputChange = {this.handleInputChange}/>
            {/* <h1>{this.state.headerText}</h1>
            <button onClick = {() => {
                this.setState({
                    headerText: 'Waoh It got Changed'
                })
            }}>Click Here!</button> */}
            <ResultsContainer suggestedNames = {this.state.suggestedNames}/>
        </div>
    )
    }
}  

// function App(){
//     return <h1>This is my functional component</h1>
// }

export default App;