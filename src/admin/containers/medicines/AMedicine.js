import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';

// .....table...
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';
import Medicineform from './Medicineform';
import { useDispatch, useSelector } from 'react-redux';
import { addmedicineData, deleteMedicinedta, getmedicinedata, upadeMedicine } from '../../../redux/action/medicine.action';
import { addmedicinefire, deletemedicineFire, getmedicineFire, updatemedicineFire } from '../../../redux/slice/medicineFireslice';



export default function AMedicine() {

    const [medicine, setmedicine] = useState([]);
    const [updatedata, setupdatedata] = useState(null)

    const dispatch = useDispatch()
    const medidataval = useSelector(state => state.fmedicine)
    console.log(medidataval);

    useEffect(() => {
        // dispatch(getmedicinedata())....fetch api  
        dispatch(getmedicineFire())
    }, []);


    const handleSubmitdata = (data) => {
        if(updatedata){
            // dispatch(upadeMedicine(data))....fetch api  
            dispatch(updatemedicineFire(data))
        }else{
            // dispatch(addmedicineData(data))....fetch api  
            dispatch(addmedicinefire(data))

        }
        setupdatedata(null)
    }
    const handledelete = (data) => {
        console.log("delete");
        // dispatch(deleteMedicinedta(id))....fetch api  
        dispatch(deletemedicineFire(data))

    }

    const handleEdit = (data) => {
        //    console.log(evalue);
        setupdatedata(data)
    }

    // ....Grid table..../
    const columns = [
        
        { field: 'name', headerName: 'Medicine Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'expiry', headerName: 'Exp Date', width: 130 },
        { field: 'desc', headerName: 'Description', width: 160 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,

            renderCell: (params) => (
                <>
                    <DeleteIcon onClick={() => handledelete(params.row)}>

                    </DeleteIcon>
                    <EditIcon onClick={() => handleEdit(params.row)}>

                    </EditIcon>
                </>

            ),

        },
       

    ];

    return (
        <div>
            <Box height={40} />
            <Medicineform onhandlesubmit={handleSubmitdata} onupdate={updatedata}/>
            {/* ....gid table */}

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={medidataval.fMdata}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>


        </div>
    );
}










// ................local storage......crud......
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { useState } from 'react';


// // .....table...
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import { styled } from '@mui/material/styles';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { useEffect } from 'react';
// import Medicineform from './Medicineform';


// //........

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));



// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// //   .....dialog...

// export default function AMedicine() {

//     const [medicine, setmedicine] = useState([]);
//     const [updatedata, setupdatedata] = useState(null)

//     useEffect(() => {
//         let medicine = JSON.parse(localStorage.getItem('medicine'));
//         // console.log(medicine,"getmedicine");  
//         if (medicine !== null) {
//             setmedicine(medicine);
//         }
//     }, []);


//     const handleSubmitdata = (data) => {
//         console.log(data);
//         let getlocaldata = JSON.parse(localStorage.getItem("medicine"))
//         console.log(getlocaldata);
//         let rno = Math.floor(Math.random() * 1000)

//         let newdata = { id: rno, ...data }

//         if (getlocaldata === null) {
//             localStorage.setItem("medicine", JSON.stringify([newdata]))
//             setmedicine([newdata])
//         } else {
//             if (updatedata) {
//                 let udata = getlocaldata.map((v) => {
//                     if (v.id === data.id) {
//                         return data
//                     } else {
//                         return v
//                     }
//                 })
//                 console.log(udata);
//                 localStorage.setItem("medicine", JSON.stringify(udata))
//                 setmedicine(udata)
//             } else {
//                 getlocaldata.push(newdata)
//                 console.log(getlocaldata);
//                 localStorage.setItem("medicine", JSON.stringify(getlocaldata))
//                 setmedicine(getlocaldata)
//             }

//         }
//         setupdatedata(null)

//     }
//     const handledelete = (i) => {
//         console.log("delete", i);

//         let mgetlocaldata = JSON.parse(localStorage.getItem("medicine"))
//         // console.log(mgetlocaldata);

//         let fdata = mgetlocaldata.filter((v, index) => v.id !== i)
//         setmedicine(fdata)
//         localStorage.setItem("medicine", JSON.stringify(fdata))

//     }

//     const handleEdit = (evalue) => {
//         //    console.log(evalue);
    
//         setupdatedata(evalue)
//     }

//     // ....Grid table..../
//     const columns = [
//         { field: 'id', headerName: 'ID', width: 70 },
//         { field: 'mname', headerName: 'Medicine Name', width: 130 },
//         { field: 'expdate', headerName: 'Exp Date', width: 130 },
//         { field: 'mprice', headerName: 'Price', width: 130 },
//         { field: 'mdisc', headerName: 'Description', width: 160 },
//         {
//             field: 'action',
//             headerName: 'Action',
//             width: 130,

//             renderCell: (params) => (
//                 <>
//                     <DeleteIcon onClick={() => handledelete(params.row.id)}>

//                     </DeleteIcon>
//                     <EditIcon onClick={() => handleEdit(params.row)}>

//                     </EditIcon>
//                 </>

//             ),

//         },
       

//     ];

//     return (
//         <div>
//             <Box height={40} />
//             <Medicineform onhandlesubmit={handleSubmitdata} onupdate={updatedata}/>
//             {/* ....gid table */}

//             <div style={{ height: 400, width: '100%' }}>
//                 <DataGrid
//                     rows={medicine}
//                     columns={columns}
//                     initialState={{
//                         pagination: {
//                             paginationModel: { page: 0, pageSize: 5 },
//                         },
//                     }}
//                     pageSizeOptions={[5, 10]}
//                     checkboxSelection
//                 />
//             </div>


//         </div>
//     );
// }