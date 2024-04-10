import React from 'react';
import {Tabs} from 'antd'
import MovieList from './MovieList';
import TheatreTable from './TheatreTable';
import MovieForm from './MovieForm';


const Admin = () => {
    const tabItems = [
        { 
            key : '1',
            label : 'Movies',
            children : <MovieList/>

        },

        {
           key : '2',
           label : 'Theatres',
           children : <TheatreTable />
        }
    ]
  return (
    <div>
        <h1>Admin Page</h1>
        <Tabs items={tabItems}/>

       {/* <MovieForm /> */}


        

    </div>
  )
}

export default Admin