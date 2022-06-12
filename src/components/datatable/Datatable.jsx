import React from "react";
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows,userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";


const Datatable = () => {
  
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
               
                  <div className="viewButton">View</div>
                <div
                  className="deleteButton"
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
  return (
    <div className="datatable">
     <div style={{ height: 600, width: '100%' }}>
       <div className="datatableTitle">
        Add New User
        <Link to="/products/new" className="link">
          Add New
        </Link>
       </div>
      <DataGrid
      className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </div>
  );
};

export default Datatable;
