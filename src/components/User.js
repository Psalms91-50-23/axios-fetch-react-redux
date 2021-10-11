import React from 'react'
import { connect } from 'react-redux'

const User = (props) => {

    const { userData } = props

    return (
   
            <>
                {userData?.map((user, index) => {

                    return (
                        <div key={index}>  
                            <h3>first name: {user.name.first} <br/> last name: {user.name.last}</h3>
                            <img src={user.picture.thumbnail} /> 

                        </div>
                    )

                    })
                }
            </>
           
    )
}

function mapStateToProps(globalState){

    return {

        randomUsers: globalState.RandomUsers
    }
}

export default connect(mapStateToProps)(User)
