import React from 'react'

class Card extends React.Component {
    
    render(props) {
        const { follower } = this.props;
        return(
            <div className="container">    
                <div className="card">

                    <h1>GitHub User Card</h1>
                    <h2>{follower?.name || follower?.login}</h2>
                <img src={follower?.avatar_url} alt={follower?.name}/>
                {follower.name && <div className="paraContainer">
                    <p>Location: {follower.location}</p>
                    <p>Public Repositories: {follower.public_repos}</p>
                    <p>Followers: {follower.followers}</p>
                    <p>Following: {follower.following}</p>
                    <p>GitHub Username: {follower.login}</p>
                    <p>Twitter Username: {follower.twitter_username}</p>
                </div>}
                </div>
            </div>
        )
    }
}
export default Card