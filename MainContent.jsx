import React from 'react';


function MainContent() {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className='navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top '>
        <div className='container-fluid'>
          <div className='navbar-wrapper'>
            <div className='navbar-brand'>
              <a href='/admin'>Dashboard</a>
            </div>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            aria-controls='navigation-index'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='navbar-toggler-icon icon-bar'></span>
            <span className='navbar-toggler-icon icon-bar'></span>
            <span className='navbar-toggler-icon icon-bar'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <div className='nav-link'>
                  <a href='/admin'>
                    <i className='material-icons'>notifications</i>{' '}
                    Notifications
                  </a>
                </div>
              </li>
              {/* <!-- your navbar here --> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- End Navbar --> */}
      <div className='content'>
        <div className='container-fluid'>
          {/* <!-- your content here --> */}
        </div>
      </div>
      <footer className='footer'>
        <div className='container-fluid'>
          <nav className='float-left'>
            <ul>
              <li>
                <a href='/admin'>Creative Tim</a>
              </li>
            </ul>
          </nav>
          <div className='copyright float-right'>
            &copy;
            <script>document.write(new Date().getFullYear())</script>, made with{' '}
            <i className='material-icons'>favorite</i> by
            <a href='/admin'>Creative Tim</=> for a better web.
          </div>
          {/* <!-- your footer here --> */}
        </div>
      </footer>
    </div>
  );
}

export default MainContent;
