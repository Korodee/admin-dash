"use client";
import SideBar from "@/components/SideBar";
import AuthorizedProvider from "./AuthorizedProvider";
import styles from "./authorizedRoute.module.scss";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthorizedProvider>
            <div className={styles["private-root-container"]}>
                <div className={styles["layout"]}>
                    <SideBar />
                    <div className={styles["children"]}>
                        <div className={styles["header"]}>
                            <p className="text-xl">//Add Header here</p>
                            {/* <SignedInHeader /> */}
                        </div>
                        <div className="pb-6">{children}</div>
                    </div>
                </div>
            </div>
        </AuthorizedProvider>
    );
};

export default PrivateLayout;
