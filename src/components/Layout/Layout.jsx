import PropTypes from 'prop-types';

import Navbar from './Navbar';
import classes from './Layout.module.css';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className={classes.main}>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
