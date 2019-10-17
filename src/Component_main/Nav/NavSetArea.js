import React, {Component} from 'react';

import InstagramExploreLogo from '../../img/instagram-explore.png'
import InstagramHeartLogo from '../../img/instagram-heart.png'
import InstagramProfileLogo from '../../img/instagram-profile.png'

class NavSetArea extends Component {
    render() {
        return (
            <div className="nav-set-area">
                <img alt="logo" src={InstagramExploreLogo} />
                <img alt="logo" src={InstagramHeartLogo} />
                <img alt="logo" src={InstagramProfileLogo} />
            </div>
        );
    }
}

export default NavSetArea