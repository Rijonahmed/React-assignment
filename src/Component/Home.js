import React from 'react';
import { CompaniesData } from './Data';
import { FaCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-5'>Companies List </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Companies Name</th>
              <th>Email Address</th>
              <th>status</th>

            </tr>
          </thead>
          <tbody>

            {
              CompaniesData.map((compani, index) => <tr>
                <th>{index + 1}</th>
                <td>{compani.name}</td>
                <td>{compani.email}</td>
                <td><span className='flex justify-items-center'>{compani.status}<FaCircle className='text-green-700 text-xs'></FaCircle></span></td>

              </tr>)
            }




          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;