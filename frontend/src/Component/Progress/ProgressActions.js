export const setProgress = (learningProgress, assignmentProgress) => ({
    type: 'SET_PROGRESS',
    payload: { learningProgress, assignmentProgress },
});
