







const ScheduleTable = () => {

  return (



<div className="absolute top-[300px] mx-auto w-auto  grid grid-auto-fit overflow-x-auto shadow-2xl sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className=" border-b border-blue-400  ">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-x-2
                ">
                    Apple MacBook Pro 
                </th>
                <td className="px-6 py-4 border-x-2">
                    Silver
                </td>
                <td className="px-6 py-4 border-x-2">
                    Laptop
                </td>
                <td className="px-6 py-4 border-x-2">
                    $2999
                </td>
                <td className="px-6 py-4  border-x-2">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr className=" border-b border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-x-2
                ">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4 border-x-2">
                    White
                </td>
                <td className="px-6 py-4 border-x-2">
                    Laptop PC
                </td>
                <td className="px-6 py-4 border-x-2">
                    $1999
                </td>
                <td className="px-6 py-4 border-x-2">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr className=" border-b border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-x-2">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4 border-x-2">
                    Black
                </td>
                <td className="px-6 py-4 border-x-2">
                    Accessories
                </td>
                <td className="px-6 py-4 border-x-2">
                    $99
                </td>
                <td className="px-6 py-4 border-x-2">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr className=" border-b border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-x-2">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4 border-x-2">
                    Gray
                </td>
                <td className="px-6 py-4 border-x-2">
                    Phone
                </td>
                <td className="px-6 py-4 border-x-2">
                    $799
                </td>
                <td className="px-6 py-4 border-x-2">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr className=" border-blue-40">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-x-2" >
                    Apple Watch 5
                </th>
                <td className="px-6 py-4 border-x-2">
                    Red
                </td>
                <td className="px-6 py-4 border-x-2">
                    Wearables
                </td>
                <td className="px-6 py-4 border-x-2">
                    $999
                </td>
                <td className="px-6 py-4 border-x-2">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default ScheduleTable