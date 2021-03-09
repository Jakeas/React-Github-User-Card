import React from 'react'

class Card extends React.Component {
    
    render() {
        const { user } = this.props;
        return(
            <div className="container">    
                <div className="card">

                    <h1>GitHub User Card</h1>
                    <h2>{user.name}</h2>
                <img src={user.avatar_url} alt={user.name}/>
                <p>{user.location}</p>
                
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
                <p>Twitter Username: {user.twitter_username}</p>
                </div>
            </div>
        )
    }
}
export default Card