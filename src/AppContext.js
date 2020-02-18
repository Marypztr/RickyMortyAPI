import React from 'react'

export const AppContext = React.createContext()

export const Username = React.createContext()

export class AppContextProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            characters : [],
            episodes : [],
            user: "",
            value: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
     }


    componentDidMount() {
      fetch("https://rickandmortyapi.com/api/episode").then(res =>
        res.json().then(json => {
          this.setState({
            episodes: json
          });
        })
      );
      fetch("https://rickandmortyapi.com/api/character").then(res =>
      res.json().then(json => {
          this.setState({
              characters: json
          })
      }))
    }

    handleChange(event) {
      this.setState({ value: event.target.value });
    }
  
    handleSubmit(event) {
      alert("Registration successful." + this.state.value);
      this.setState({ user: this.state.value });
      event.preventDefault();
    }
 
    render() {
      const { value } = this.state;
        return (
          <AppContext.Provider
            value={{
                episodes: this.state.episodes.results,
                characters: this.state.characters.results,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                value
            }}
          >
            {this.props.children}
            <Username.Provider value=""/>
          </AppContext.Provider>
        );
      }
}

export const AppContextConsumer = AppContext.Consumer;
