
const LDate = ({ values }) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    return (
      <>
        {Object.values(LDate).map((ldate, idx) => {
          return (
            <span key={idx} >
              {ldate}
            </span>
          );
        })}
      </>
    );
  };


export const Columns=[
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