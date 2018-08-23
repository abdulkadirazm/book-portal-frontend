import React from "react"
import * as UsersAPI from './UsersAPI'

class DeleteUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allUsers:[],
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount(){
        UsersAPI.getAll().then((users)=>{
            if(!users){
                this.setState({allUsers:[""]})
            }else{
                this.setState({allUsers:users})
            }
        })
    }

    clickHandler(index, e){
       const users = Object.assign([], this.state.allUsers)
       users.splice(index, 1)
       this.setState({allUsers:users})
       UsersAPI.deleteUser(e.target.id)
    }
    
    changeQuery = ((query) => {
        UsersAPI.deleteUser(query)
        });

    render(){
        const { allUsers } = this.state

        return(
            <div>
                <div>
                <table border="1">
                        <tr>
                            <th></th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                      {allUsers.map((user, index) => {
                          return(
                            <tr>
                                <td><button id={user.userID} onClick={this.clickHandler.bind(this, index)} >X</button></td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                          )
                      })}
                    </table>
                </div>
            </div>
        )
    }
}

export default DeleteUser;