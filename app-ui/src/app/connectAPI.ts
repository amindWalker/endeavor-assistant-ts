import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITask } from "../common/interfaces";

export const apiStateSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
        // prepareHeaders(headers) {
        //     headers.set("x-api-key", SOME_API_KEY)
        // }
    }),
    endpoints(build) {
        return {
            fetchTasks: build.query<ITask[], number | void>({
                query(limit = 10) {
                    return `/tasks?limit=${limit}`;
                },
            }),
        };
    },
});

export const { useFetchTasksQuery } = apiStateSlice;
