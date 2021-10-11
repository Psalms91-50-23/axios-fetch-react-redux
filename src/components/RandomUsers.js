import React, { useState, useEffect } from 'react'
import { axiosFetchRandomUsers, axiosFetchNextRandomUsers } from '../api/Api'
import { connect } from 'react-redux'
import User from './User'
import { addUser } from '../store/action-creators'


const RandomUsers = (props) => {

    const { dispatch, randomUsers } = props
    const [randomUser, setRandomUser] = useState(randomUsers)
    const [nextUserNum, setNextUserNum] = useState(1)


    useEffect(() => {
        setRandomUser(randomUsers)

    },[randomUsers])


    function fetchNextUser(){

        axiosFetchNextRandomUsers(nextUserNum)
        .then(({data}) => {

            dispatch(addUser(data.results))
            setNextUserNum(nextUserNum+1)
        }).catch(err => {
            console.error(err)
        })

    }

    return (
        <div>
            <h3>Random Users</h3>
            <button onClick={() => fetchNextUser()}>next user</button>
            <div className="user-container">
            {
                randomUser?.map((user, index) => {

                    return (
                        <div className="user-item" key={index}>
                            <User userData={user}/>        
                        </div>
                    
                    )
                })
            }
            </div>
        </div>
    )
}

function mapStateToProps(globalState){

    return {

        randomUsers: globalState.randomUsers
    }
}

export default connect(mapStateToProps)(RandomUsers)
