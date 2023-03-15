import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search , Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'


function Customers() {
  const showCustomersData = customersGrid.map((item,index) => (
    <ColumnDirective key={index} {...item} />
 ))


 return (
   <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
     <Header category="Page" title="Customers" />
     <GridComponent width="auto" toolbar={['Search', 'Delete']} editSettings={{allowDeleting: true, allowEditing: true}} dataSource={customersData} allowPaging allowSorting > 
       <ColumnsDirective>
       {showCustomersData}
       </ColumnsDirective>
       <Inject services={[Search, Toolbar, Page, Selection, Edit , Sort, Filter]} /> 
     </GridComponent>
   </div>
 );
}

export default Customers