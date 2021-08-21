
const SET_JOB = 'SET_JOB';

const initialState = {
    job: [],
    totalUsersCount: 23,
    loading: true,
    error: false,
    pageSize: 104,
    currentPage: 3
};

const rabotaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOB:
            return {...state, job: action.job}

        default:
            return state;
    }
}


export const getJob = (job) => ({type: SET_JOB, job})


export default rabotaReducer;
