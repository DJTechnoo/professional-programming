const App = () => {
  return (
    <AuthState>
    <ProfileState>
    <CompanyState>
    <CourseState>
    <TaskState>
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute exact path="/companies" component={CompanyLists}/>
            <PrivateRoute exact path="/companies/make" component={CreateCompany}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <PrivateRoute exact path="/create-profile" component={ProfileCreate}/>
            <PrivateRoute exact path="/company-dashboard" component={CompanyDashboard}/>
            <PrivateRoute exact path="/company-profile" component={CompanyProfile}/>
            <Route exact path="/profile/:user" component={ShowProfile}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </div>
      </div>
    </Router>
    </TaskState>
    </CourseState>
    </CompanyState>
    </ProfileState>
    </AuthState>
  );
}