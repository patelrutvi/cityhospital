import * as ActionType from '../ActionType'

export const getdoctordata = () => (dispatch) => {
    try{
        fetch("http://localhost:3004/doctors")
        .then((response) => response.json())
        .then((data) => dispatch({type : ActionType.GET_DOCTORDATA , paylord : data}))
        .catch((error)=>console.log(error))
    }catch(error){
        console.log(error);
    }
   
}


export const addDoctor = (data) => (dispatch) => {
    try{
        fetch("http://localhost:3004/doctors")
    }catch(error){
        console.log(error);
    }
}


// {
//     "posts": [
//       {
//         "id": 1,
//         "title": "json-server",
//         "author": "typicode"
//       }
//     ],
//     "comments": [
//       {
//         "id": 1,
//         "body": "some comment",
//         "postId": 1
//       }
//     ],
//     "profile": {
//       "name": "typicode"
//     },
//     "doctors": [
//       {
//         "id": 101,
//         "name": "Dr. Chandnani Sonia",
//         "Designation": "Gynecologist",
//         "Degree": "MBBS, MD",
//         "img":" vbhnvnvb"
//       },
//       {
//         "id": 102,
//         "name": "Dr. Desai Prashant",
//         "Designation": "ENT Surgeon",
//         "Degree": "MBBS",
//         "img":" ",
//          "img1":" "
//       },
//       {
//         "id": 103,
//         "name": "Dr. Rupareliya Ravi",
//         "Designation": "Physician (MD Medicine)",
//         "Degree": "MBBS, MD (Medicine)",
//         "img":" "
//       },
//       {
//         "id": 104,
//         "name": "Dr. Rashiniha Virendra",
//         "Designation": "Gynecologist",
//         "Degree": "BEMS",
//         "img":" "
//       }
//     ]
//   }