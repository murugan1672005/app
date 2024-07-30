export const filterCourses = (courses, filterType, filterValue) => {
    if (!filterType || !filterValue) return courses;

    switch (filterType) {
        case 'category':
            return courses.filter(course => course.categories.includes(filterValue));
        case 'instructor':
            return courses.filter(course => course.instructors.includes(filterValue));
        case 'difficulty':
            return courses.filter(course => course.difficulty_level === filterValue);
        case 'date':
            return courses.filter(course => {
                const { start, end } = course.dates;
                return filterValue >= start && filterValue <= end;
            });
        default:
            return courses;
    }
};
