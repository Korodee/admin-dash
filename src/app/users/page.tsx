import PrivateLayout from "@/components/AuthorizedRoute";
import UsersTable from "./UsersTable";

const Users = () => {
    return(
        <PrivateLayout>
            <div className="bg-white rounded-[14px] p-6">
                <div>
                    <p className='text-[20px] font-[600] text-[#78726D] mb-[20px]'>Users</p>
                    <UsersTable/>
                </div>
            </div>
        </PrivateLayout>
    )
}

export default Users;