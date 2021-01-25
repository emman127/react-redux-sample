import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { allUsers } from "../redux/actions/user.action";

const UserContainer = ({ userData, allUsers }) => {
    useEffect(() => {
        allUsers();
    }, []);
    return (
        <div>
            <h3>Users</h3>
            { console.log(userData.users) }
            { userData.loading ? 
                <p>loading...</p> : 
                userData.error ? 
                <p>{ userData.error }</p> : 
                userData.users ? 
            userData.users.map(user => <h2 key={ user.id }>{ user.name }</h2>) : <p>No User</p>
            }
            {/* { userData.users.map(user => <h2>{ user.name }</h2>) } */}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        allUsers: () => dispatch(allUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);