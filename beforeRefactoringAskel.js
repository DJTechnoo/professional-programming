const Courses = () => { 
    const courseContext = useContext(CourseContext);
    const companyContext = useContext(CompanyContext);
    const {courses, getCompanyCourses} = courseContext;

    useEffect(() => {
        if(companyContext.currentCompany !== null)getCompanyCourses(companyContext.currentCompany._id);
        // eslint-disable-next-line
    }, [companyContext.currentCompany]);


    return (   
        <Fragment>
            <div className="flex-container">
            {courses.map(course => (
            <CourseItem 
                key={course._id}  
                course={course} 
                />
            ))}
            </div>
        </Fragment>
    );
}


export default Courses;