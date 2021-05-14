import Table from "./table";
import React, { useMemo,useState, useEffect} from "react";

export default function ColumnsData(){
    const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);

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

return (
    <div className="columnsss">
      <Table columns={Columns} data={data} />
    </div>
  );

   
    }
