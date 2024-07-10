import React,{Component} from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';
export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state ={
            contacts:[],
        }
    }

    /**
     * fetch the data before we actually render or components in the render method
     * fetching from server
     */
    componentDidMount(){
        fetch("http://localhost:8080/api/contacts")
            .then(response=>response.json())
            .then(data => this.setState({contacts:data}))
    }

    render(){
        return (
            <div>
                <div className="row">
                    <AddContacts/>
                </div>

                <div className="row">
                    {
                        this.state.contacts.map(
                                (item)=>(
                                    /*it is really important to have the KEY there*/
                                    <SingleContact key={item.id} item={item} />
                                )
                        )
                    }
                </div>

            </div>
        )
    }
}