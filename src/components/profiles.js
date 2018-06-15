import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../hoc/card';
import Auth from '../hoc/auth';

const Profiles = (props) => {
    const redirect = () => {
      // props.history.push('/')
    }
    return (
      <Auth>
        <Card>
          <Link to={{
            pathname: `${props.match.url}/posts`,


          }}
          >Go to /profiles/posts</Link>

        </Card>
      </Auth>
    )
}

export default Profiles;
