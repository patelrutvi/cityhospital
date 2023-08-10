import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert } from '../../../redux/slice/alertslice';


function Alert(props) {
    const alertval = useSelector(state => state.alert)
    const dispatch = useDispatch()
    console.log(alertval);
    useEffect(() => {
        if (alertval.text !== '') {
            enqueueSnackbar(alertval.text, {
                autoHideDuration: 1000,
                variant: alertval.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                }
            })
        }
    }, [alertval.text])

    let timer = setTimeout(() => {
        dispatch(resetAlert())
    }, 1000)

    return () => {
        clearTimeout(timer())
    }

    return (
        <div>

        </div>
    );
}

export default Alert;