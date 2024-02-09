import PrivateLayout from "@/components/AuthorizedRoute";
import KycTable from "@/app/kyc/kycTable";

const kyc = () => {
    return (
        <PrivateLayout>
            <div className="bg-white rounded-[14px] p-6">
                <div>
                    <p className="text-xl font-medium text-[#78726D] mb-6">
                        User Kyc Verification
                    </p>
                    <KycTable />
                </div>
            </div>
        </PrivateLayout>
    );
};

export default kyc;
