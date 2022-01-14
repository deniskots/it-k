import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, useParams} from "react-router-dom";
import {useRouteMatch} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {Navigate} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Navigate to={'/login'}/>;
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    };
};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth

});

let ProfileURLMatch = (props) => {
    const {userId} = useParams();
    // const match = useRouteMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={userId} />;
}

export default connect (mapStateToProps, {getUserProfile}) (ProfileURLMatch);

