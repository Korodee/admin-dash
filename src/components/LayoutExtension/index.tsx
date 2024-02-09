"use client";
import { persistor, store } from "@/redux/store";
import { Suspense } from "react";
import TanstackProvider from "@/utils/TanstackProvider";
import { Provider } from "react-redux";

// export const callConfig = createCaller({
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     state: () => useAppSelector((state) => state),
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     dispatch: () => useAppDispatch(),
// });

const LayoutExtension = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <TanstackProvider>
                <Suspense>{children}</Suspense>
            </TanstackProvider>
        </Provider>
    );
};

export default LayoutExtension;
