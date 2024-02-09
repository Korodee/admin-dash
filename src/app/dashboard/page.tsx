"use client";
import PrivateLayout from "@/components/AuthorizedRoute";
import Analytics from "@/app/dashboard/analytics";
import RecentTransactionTable from "./recentTransactionsTable";

const Dashboard = () => {
    return (
        <PrivateLayout>
            <div className="bg-white rounded-[14px] p-6">
                <div>
                    <p className="text-xl font-medium text-[#78726D] mb-6">
                        Analytics
                    </p>
                    <p>{process.env.NEXT_PUBLIC_BACKEND_BASE_URL ?? ""}</p>

                    <Analytics />
                </div>

                <div>
                    <p className="text-xl font-medium text-[#78726D] mb-6">
                        Recent Transactions
                    </p>
                    <RecentTransactionTable />
                </div>
            </div>
        </PrivateLayout>
    );
};

export default Dashboard;
