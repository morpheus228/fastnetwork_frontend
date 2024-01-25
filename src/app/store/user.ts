import { createPersistStore } from "../utils/store";

const DEFAULT_USER_STATE = {
    condition: 0,
};
declare global {
    interface Window {
        Telegram: any,
    }
}

export const useUserStore = createPersistStore(
    { ...DEFAULT_USER_STATE },
    (set, _get) => {
        function get() {
            return {
                ..._get(),
                ...methods,
            };
        }

        const methods = {
            test() {
                try {
                    if (window.Telegram && typeof window !== 'undefined') console.log(window.Telegram.WebApp);
                }
                catch {
                    console.log('window error')
                }
            }
        };

        return methods;
    },
    {
        name: 'user',
        version: 3.8
    },
);

