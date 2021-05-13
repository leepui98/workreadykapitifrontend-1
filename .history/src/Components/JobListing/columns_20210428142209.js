import Table from "./table";
import React, { useMemo} from "react";

const LDate = ({ values }) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    return (
      <>
        {Object.values(LDate).map((ldate, idx) => {
          return (
            <span key={idx} className="badge">
              {ldate}
            </span>
          );
        })}
      </>
    );
  };


const Columns= useMemo( ()=>[
{
    accessor: 'jobtitle'
},
{
    accessor: 'companyname'
},

{
    accessor:'jobhours'
},

{
    accessor:'jobpay'
},

{
    accessor:'startdate'
},
{
    accessor:'jobdescription'
},
{
    accessor:'listdate',
    Cell: ({ cell: { value } }) => <LDate values={value} />
}

]
);

export default function ColumnsData(){
    return (
    <div className="columnsss">
      <Table columns={Columns} data={data} />
    </div>
  );
    }
