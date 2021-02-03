import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



const customTotalText = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );
  

const paginatorOption=(data=[])=>{
    let options={
        paginationSize: 10,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        disablePageTitle: true,
        paginationTotalRenderer:customTotalText,
        sizePerPageList: [{
          text: '10', value: 10
        }, {
          text: '20', value: 20
        },
        {
            text: '50', value: 50
          },
           {
          text: 'All', value: data.length
        }]
      }

      return options;
}
const Table =({columns=[],data=[],keyField="id",rowEvents,showEmptyText=true,pagination=false,...props})=>{
   
    
  if(showEmptyText)
  {
    props["noDataIndication"]=()=>("No Data to Display")
  }
  if(pagination && data.length){
    props["pagination"]=paginationFactory(paginatorOption(data))
  }
    return   <BootstrapTable bordered={false}  rowEvents={ rowEvents && rowEvents } columns={columns} data={data} keyField={keyField} hover bootstrap4  {...props} />
}


export default Table;