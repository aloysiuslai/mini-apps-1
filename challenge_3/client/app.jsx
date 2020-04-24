
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      creditCard: '',
      expiration: '',
      cvv: ''
    }
    this.nextPage = this.nextPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
  };

  // submitInfo() {
  //   axios.post('/info',)
  //     .then(()=>console.log('Submitted'))
  //     .catch(()=>console.log(error))
  // }

  clearState() {
    this.setState({
      page: 0,
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      creditCard: '',
      expiration: '',
      cvv: ''
    })
  }

  nextPage () {
    console.log(this.state.page)
    const newPage = this.state.page + 1;
    // console.log(newPage);
    this.setState({page: newPage})
    console.log(this.state.page)
  }

  getInfo() {
    axios.get('/info')
      .then((res)=> console.log(res.data))
      .catch(()=>console.log('error'));
  }

  handleChange(event) {
    // console.log(event.target);
    const {name, value} = event.target;
    this.setState({[name]: value});

  }


  render() {
    if (this.state.page === 0) {
      return (
        <div>
        <h1>Multistep Checkout Experience</h1>
        <br/>
        <button type="button" onClick={this.nextPage}>Checkout</button>
      </div>
      )

    }

    if (this.state.page === 1) {
      return (
        <Account nextPage={this.nextPage} handleChange={this.handleChange} state={this.state}/>
      )
    }

    if (this.state.page === 2) {
      return (
        <Shipping nextPage={this.nextPage} handleChange={this.handleChange} state={this.state}/>
      )
    }

    if (this.state.page === 3) {
      return (
        <CreditCard nextPage={this.nextPage} handleChange={this.handleChange} state={this.state}/>
      )
    }

    if (this.state.page === 4) {
      return (
        <Confirmation clearState={this.clearState}/>
      )
    }
  }
}

class Account extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <form>
        <label>Name</label>
        <br/>
        <input type="text" name="name" placeholder="Name" value={this.props.state.name} onChange={this.props.handleChange}/>
        <br/>
        <label>Email</label>
        <br/>
        <input type="text" name="email" placeholder="Email" value={this.props.state.email} onChange={this.props.handleChange}/>
        <br/>
        <label>Password</label>
        <br/>
        <input type="text" name="password" placeholder="Password" value={this.props.state.password} onChange={this.props.handleChange}/>
        <br/>
        <button onClick={this.props.nextPage}>Next</button>
      </form>
    )
  }
}

class Shipping extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <form>
      <label>Address Line 1</label>
      <br/>
      <input type="text" name="line1" placeholder="Address Line 1" value={this.props.state.line1} onChange={this.props.handleChange}/>
      <br/>
      <label>Address Line 2</label>
      <br/>
      <input type="text" name="line2" placeholder="Address Line 2" value={this.props.state.line2} onChange={this.props.handleChange}/>
      <br/>
      <label>City</label>
      <br/>
      <input type="text" name="city" placeholder="City" value={this.props.state.city} onChange={this.props.handleChange}/>
      <br/>
      <label>State</label>
      <br/>
      <input type="text" name="state" placeholder="State" value={this.props.state.state} onChange={this.props.handleChange}/>
      <br/>
      <label>Zip Code</label>
      <br/>
      <input type="text" name="zip" placeholder="Zip Code" value={this.props.state.zip} onChange={this.props.handleChange}/>
      <br/>
      <button onClick={this.props.nextPage}>Next</button>
    </form>
    )
  }
}

class CreditCard extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <form>
      <label>Credit Card Number</label>
      <br/>
      <input type="text" name="creditCard" placeholder="Credit Card Number" value={this.props.state.creditCard} onChange={this.props.handleChange}/>
      <br/>
      <label>Expiration Date</label>
      <br/>
      <input type="text" name="expiration" placeholder="Expiration Date" value={this.props.state.expiration} onChange={this.props.handleChange}/>
      <br/>
      <label>CVV</label>
      <br/>
      <input type="text" name="cvv" placeholder="CVV" value={this.props.state.cvv} onChange={this.props.handleChange}/>
      <br/>
      <button onClick={this.props.nextPage}>Next</button>
    </form>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div>
        <h1>Confirmation Page</h1>
        <button onClick={this.props.clearState}>Next</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));