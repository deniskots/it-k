import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
        if (props.users.length === 0) {
            props.setUsers( [
                {id: 1, photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: true, fullName: 'Denis', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
                {id: 2, photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: true, fullName: 'Sacha', status: 'I am a boss', location: {city: 'London', country: 'England'}},
                {id: 3, photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: false, fullName: 'Ivan', status: 'I am a boss', location: {city: 'Paris', country: 'France'}},
                {id: 4, photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: true, fullName: 'Susy', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
                {id: 5, photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: true, fullName: 'Adrian', status: 'I am a boss', location: {city: 'Berlin', country: 'Germany'}},
                {id: 6, photoUrl: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', followed: false, fullName: 'John', status: 'I am a boss', location: {city: 'New-York', country: 'USA'}},
            ]);
        };
    return <div>
        {
            props.users.map( u => <div key = {u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick= { () => { props.unfollow(u.id) } }> Unfollow </button>
                            : <button onClick = { () => { props.follow(u.id) } }> Follow  </button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div> )
        }
    </div>
};


export default Users;