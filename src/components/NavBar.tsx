import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'

/**
 * Component responsible for rendering the nav bar on all app pages.
 */
export class NavBar extends Component {

    signOut = async () => {
        await Auth.signOut()
    }

    render() {
        return (
            <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
                <Link className={'navbar-brand'} to='#'>Koffie</Link>
                <button className='navbar-toggler' type='button' data-toggle='collapse'
                        data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                        aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link className={'nav-link'} to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/about'>About</Link>
                        </li>
                    </ul>

                    <button onClick={this.signOut}
                            className='btn btn-outline-warning'>
                        SignOut
                    </button>
                </div>
            </nav>
        )
    }
}