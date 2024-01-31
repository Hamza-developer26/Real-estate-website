import { useEffect, useState } from 'react'
import axios from 'axios'

const Customer = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])
  return (
     <section className='font-poppins text-white bg-primary px-14'>
        <div className='text-center py-4'>
            <h2 className='text-3xl  font-medium py-6'>OUR TRUSTED CUSTOMER Details</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quam.</p>
            </div>
            <table className='relative top-[50px] left-[100px]'>
                <thead>
                    <tr className='gradient-text font-medium text-2xl'>
                        <th>ID</th>
                        <th className='text-left px-[80px]'>Name</th>
                        <th className='text-left px-[80px]'>Email</th>
                        <th className='text-left '>City</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        data.map((user , index)=>{
                            return <tr key={index} className=''>
                                <td>{user.id}</td>
                                <td className=' text-left px-[80px] py-2'>{user.name}</td>
                                <td className='text-left  px-[80px]'>{user.email}</td>
                                <td className='text-left'>{user.address.city}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        

        

     </section>

  )
}

export default Customer