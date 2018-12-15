class VisibilityToggle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => {
      return {
        visible : !prevState.visible,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggle}>{this.state.visible ? 'Hide' : 'Show'}</button>
        {this.state.visible && <p>Some data</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));