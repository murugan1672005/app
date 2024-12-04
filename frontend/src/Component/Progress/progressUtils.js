export const calculateLearningProgress = (currentPage, totalItems) => {
    if (totalItems === 0) return 0;
    return Math.min((currentPage / totalItems) * 100, 100); // Ensure the progress does not exceed 100%
};

export const calculateAssignmentProgress = (assignmentCompletion) => {
    return Math.min(assignmentCompletion, 100); // Ensure the progress does not exceed 100%
};
