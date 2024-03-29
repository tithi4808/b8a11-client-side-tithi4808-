import MUIDataTable from "mui-datatables";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Featuredblog = () => {

    const navigate=useNavigate()


    const [featureddata,setfeatureddata]=useState([])
    useEffect(()=>{
        fetch('https://b8a11-server-side-tithi4808-4wuh4agec-tanya-sultanas-projects.vercel.app/featuredblogs')
        .then(res=>res.json())
        .then(data=>{
            const featureblog=data.slice(0,10)
            setfeatureddata(featureblog)
        })
    },[])

   


    console.log(featureddata)

    

    const columns = [
        {
            name: "serial",
            label: "Serial",
            options: {
             filter: true,
             sort: true,
            }
           },
        {
         name: "title",
         label: "",
         options: {
          filter: true,
          sort: true,
          responsive: "all",
         }
        },
        {
         name: "blogowner",
         label: "Blog Owner Name",
         options: {
          filter: true,
          sort: false,
          responsive: "all",
         }
        },
        {
         name: "blogownerimage",
         label: "Blog Owner image",
         options: {
          filter: true,
          sort: false,
          responsive: "all",
          customBodyRender: (value) => {
            return <img src={value} alt="Blog Owner" style={{ width: '50px', height: '50px' }} />;
          },
          
         }
        },
       ];


       const options = {
        responsive: "standard",
        selectableRows: "none"
        };
        
    const getTableDataWithSerial = () => {
        let serial = 1;
        return featureddata.map(row => {
            const newRow = { ...row };
            newRow.serial = serial++;
            return newRow;
        });
    };


   


    return (
        <div>
            <MUIDataTable
               title={"Featured Blogs"}
                 data={getTableDataWithSerial()}
                 columns={columns}
                 options={options}
/>

            
        </div>
    );
};

export default Featuredblog;