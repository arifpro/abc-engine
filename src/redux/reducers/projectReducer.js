import projectConstants from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    success: '',
    projectData: {
        projectName: '',
        projectDescription: '',
        client: '',
        contractor: '',
    },
};

const projectReducer = (state = initialState, action) => {
    console.log(action.payload);

    switch (action.type) {
        case projectConstants.PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case projectConstants.PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: '',
                projectData: { ...state.projectData },
            };
        case projectConstants.PROJECT_FAILED:
            return {
                ...state,
                loading: false,
                error: 'unable to set project data',
            };

        default:
            return state;
    }
};

export default projectReducer;
