import React, { useContext, useEffect } from 'react';
import Link from '../components/UI/Link/Link';
import { fetchDepartments } from '../../redux/slice/departmentslice';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../Context/ThameContext';
import { styled } from 'styled-components';


function Department(props) {
    const theme = useContext(ThemeContext)

    const dispatch = useDispatch()
    const departData = useSelector(state => state.fdapart)
    console.log(departData.FdepartData , 'department user');
       


    useEffect(() => {
        // dispatch(getData());
        dispatch(fetchDepartments())
    }, []);
    return (
        <div>
            <main>
                <section id="departments " className={`departments ${theme.theme}` }>
                    <div className="container">
                        <div className="section-title">
                            <h2>Departments</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <ul className="nav nav-tabs flex-column">
                                    {

                                       departData.FdepartData.map((c, i) => {
                                            return (
                                                <>

                                                    <li className="nav-item">
                                                        <a
                                                            className={i === 0 ? "nav-link active show" : "nav-link"}
                                                            data-bs-toggle="tab"
                                                            // to={'#tab-'+c.id}
                                                            href={`#tab-${i + 1}`}

                                                        >
                                                            {c.name}

                                                        </a>
                                                    </li>

                                                </>

                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="col-lg-9 mt-4 mt-lg-0">
                                <div className="tab-content">
                                    {
                                         departData.FdepartData.map((c, i) => {
                                            return (
                                                <div className={i === 0 ? 'tab-pane active show' : 'tab-pane'} id={`tab-${i + 1}`}>
                                                    <div className="row">
                                                        <div className="col-lg-8 details order-2 order-lg-1">
                                                            <h3 >{c.name}</h3>
                                                            <p className="fst-italic">
                                                                {c.desc}
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                                            <img
                                                                src="../assets/img/departments-3.jpg"
                                                                alt
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}

export default Department;