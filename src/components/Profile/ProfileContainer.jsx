import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    };
};


let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth

});

let ProfileURLMatch = (props) => {
    const {userId} = useParams();
    return <ProfileContainer {...props} match={userId}/>;
}

export default connect (mapStateToProps, {getUserProfile}) (ProfileURLMatch, AuthRedirectComponent);

