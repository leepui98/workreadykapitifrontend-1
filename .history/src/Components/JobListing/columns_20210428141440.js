
import Table from "./table";

export default function columnsTable(){
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


const Columns=[
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

return (
    <div className="columnsss">
      <Table columns={columns} data={data} />
    </div>
  );
}