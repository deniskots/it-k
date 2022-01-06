import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {useRouteMatch} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {


        let userId = this.props.match;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    };
};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

});

let ProfileURLMatch = (props) => {
    const {userId} = useParams();
    // const match = useRouteMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={userId} />;
}

export default connect (mapStateToProps, {setUserProfile}) (ProfileURLMatch);

