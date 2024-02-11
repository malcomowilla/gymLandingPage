







const ScheduleTable = () => {

  return (



<div className="absolute top-[300px] mx-auto w-auto  grid grid-auto-fit overflow-x-auto shadow-2xl sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Monday
                </th>
                <th scope="col" className="px-6 py-3">
                    Tuesday
                </th>
                <th scope="col" className="px-6 py-3">
                    Wednesday
                </th>
                <th scope="col" className="px-6 py-3">
                    Thursday
                </th>
                <th scope="col" className="px-6 py-3">
                    Friday
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className=" border-b border-blue-400  ">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-x-2
                ">
                    Muscle Training
                </th>
                <td className="px-6 py-4 border-x-2">
                    10:00AM-11:30AM
                </td>
                <td className="px-6 py-4 border-x-2">
                    Laptop
                </td>
                <td className="px-6 py-4 border-x-2">
                </td>
                <td className="px-6 py-4  border-x-2">

    Simon Oleinkei


                </td>
            </tr>
            <tr className=" border-b border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-x-2
                ">
                    Body Building
                </th>
                <td className="px-6 py-4 border-x-2">
                    
                </td>
                <td className="px-6 py-4 border-x-2">
                </td>
                <td className="px-6 py-4 border-x-2">
                </td>
                <td className="px-6 py-4 border-x-2">

    Lenard Oduor

                </td>
            </tr>
            <tr className=" border-b border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-x-2">
                Yoga Training Class

                </th>
                <td className="px-6 py-4 border-x-2">
                    
                </td>
                <td className="px-6 py-4 border-x-2">
                </td>
                <td className="px-6 py-4 border-x-2">
                    2:00PM-3:30PM
                </td>
                <td className="px-6 py-4 border-x-2">

Peter Ochieng

                </td>
            </tr>
            <tr className=" border-b border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-x-2">
                    Advanced Training
                </th>
                <td className="px-6 py-4 border-x-2">
                    
                </td>
                <td className="px-6 py-4 border-x-2">
                    
                </td>
                <td className="px-6 py-4 border-x-2">
                    
                </td>
                <td className="px-6 py-4 border-x-2">


    Johnston  Kamau

                </td>
            </tr>
            <tr className=" border-blue-40">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-x-2" >
                    
                </th>
                <td className="px-6 py-4 border-x-2">
                    
                </td>
                <td className="px-6 py-4 border-x-2">
                    
                </td>
                <td className="px-6 py-4 border-x-2">
                    
                </td>
                <td className="px-6 py-4 border-x-2">



                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default ScheduleTable