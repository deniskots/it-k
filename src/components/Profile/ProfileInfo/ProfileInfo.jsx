import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300"/>
            </div>
            <div className={classes.descriptionBlock}>
                photo and description
            </div>
        </div>
    )
}

export default ProfileInfo;