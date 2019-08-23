import React from 'react';
import '../App.css'
import { Grid, Cell } from 'react-mdl';
import Jumbotron from './Jumbotron'
import { Link } from '@material-ui/core';
export const Home = () => (
    // <Container>
    //     <Grid container justify="center" alignItems="center">
    //         <Jumbotron />
    //         <div className="baner-text">
    //             <div className="text">
    //                 <h1>Full Stack Web Developer</h1>
    //                 <hr />
    //                 <p>HTML/CSS | Bootstrap | JavaScript | React | ReactJS | NodeJS | ExpressJS | MongoDB</p>
    //             </div>
    //         </div>
    //     </Grid>
    // </Container>
    <div style={{ width: '100%', margin: 'auto' }}>
        <Grid>
            <Cell col={12}>
                <Jumbotron />
                <div className="bg-baner">
                    <div className="baner-text">
                        <div className="text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | ReactJS | NodeJS | ExpressJS | MongoDB</p>
                            <div className="contact-links">
                                <Link href="https://www.instagram.com/sunihalinh/" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </Link>
                                <Link>
                                    <i className="fa fa-envelope"></i>
                                </Link>
                                <Link>
                                    <i className="fa fa-facebook-square"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Cell>
        </Grid>
    </div>
)
