import { connect } from 'react-redux';
import { compose } from 'recompose';

import LoginView from './LoginView';

export default compose(
  connect(
    state => ({
      token: null,
    }),
  )
)(LoginView);
