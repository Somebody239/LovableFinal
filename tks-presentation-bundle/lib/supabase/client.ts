export const supabase = {
    auth: {
        getSession: async () => ({ data: { session: null } }),
    },
    functions: {
        invoke: async (..._args: any[]) => ({
            data: null,
            error: { message: "Supabase client is mocked. AI features unavailable." }
        }),
    }
};
