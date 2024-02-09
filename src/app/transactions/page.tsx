import PrivateLayout from "@/components/AuthorizedRoute";
import TransactionTable from "@/app/transactions/transactionTable";

const Transactions = () => {
    return (
        <PrivateLayout>
            <div className="bg-white rounded-[14px] p-6">
                <div>
                    <p className="text-xl font-medium text-[#78726D] mb-6">
                        Transactions
                    </p>
                    <TransactionTable />
                </div>
            </div>
        </PrivateLayout>
    );
};

export default Transactions;
