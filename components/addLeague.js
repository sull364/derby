import React, { Component} from "react";

class AddLeague extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // country: '',
            // region: '',
            // city: '',
            // name: '',
            // fb: '',
            modal: 'none',
            status: 'B',
        }
        this.openAddLeagueModal = this.openAddLeagueModal.bind(this)
    }
    
    // event handler
    openAddLeagueModal() {
        if (this.state.modal === 'none') {            
            this.setState({ modal: 'block'})
        }
    }

    handleSubmit(input) {
      const newMessage = document.getElementById('message').value;
      const sender = document.getElementById('name').value;
      fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json',
            }.then(res => res.json())
            .then(response => console.log("successful POST!", JSON.stringify(response)))
        })  
    }
   

    render() {

      return (
        <div>
            <div id='addLeagueModal' style={{display: this.state.modal}}>
                <form className='addLeague-content'>
                   <h1>Add a league to the List</h1>
                   
                    <p>League Name:</p>
                    <input
                        type="text"
                        name='name'
                        id= 'name'
                        value=''
                    />
                    <p>Country:</p>
                    <input
                        type="text"
                        name='country'
                        id= 'country'
                        value=''
                    />
                    <p>Region:</p>
                    <input
                        type="text"
                        name='region'
                        id= 'region'
                        value=''
                    />
                    
                    <p>City:</p>
                    <input
                        type="text"
                        name='city'
                        id= 'city'
                        value=''
                    />
                    <p>Facebook:</p>
                    <input
                        type="text"
                        name='fb'
                        id= 'fb'
                        value=''
                    />
                    <p> Status</p>
                    <select name='status' id='status' >                        
                        <option value="B">B</option>
                        <option value="S">S</option>
                        <option value="P">P</option>
                    </select>
                    
                    <br/>
                    <br/>
                    <button className='addModal' id='addLeagueBtn' type='submit'>Submit</button>
                    <button className='addModal'>Cancel</button>
                </form>
            </div>
        <button className='addBtn' onClick={() => this.openAddLeagueModal()}>Add League</button>
        </div>
      );
    }
  }

  export default AddLeague;