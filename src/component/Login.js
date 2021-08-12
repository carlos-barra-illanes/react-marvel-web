import React, { useContext } from 'react'
import UserContext from "../context/UserContext";
import LoginGoogle from './LoginGoogle'
export default function Login() {

    const {user,handleLogout} = useContext(UserContext);

    return (
        <div className="col-12 col-md-9 align-self-center fh5co_mediya_right fh5co_mediya_right_mobile">

            {user &&
                <>
                  

                    <div class="footer_main_title py-3">
                         Hola , {user.displayName}
                         <a onClick={handleLogout} class="myButton">Salir</a>
                         </div>       
                   
                </>
            }


            {!user &&
                <>
                    <div className="text-center d-inline-block">
                        <a className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-search"></i></div></a>
                    </div>
                    <div className="text-center d-inline-block">
                        <a className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-linkedin"></i></div></a>
                    </div>

                    <LoginGoogle />

                    <div className="text-center d-inline-block">
                        <a href="https://twitter.com/fh5co" target="_blank" className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-twitter"></i></div></a>
                    </div>
                    <div className="text-center d-inline-block">
                        <a href="https://fb.com/fh5co" target="_blank" className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-facebook"></i></div></a>
                    </div>


                    <div className="clearfix"></div>
                </>
            }

        </div>
    )
}
