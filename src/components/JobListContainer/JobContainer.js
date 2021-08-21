import React from 'react';
import {connect} from "react-redux";
import {getJob} from "../../redux/reducers/rabota";
import {getJobs} from "../../api/api";
import JobList from "./JobList";

class JobContainer extends React.Component {
    componentDidMount() {
        getJobs(this.props.currentPage, this.props.pageSize).then(data => {

            this.props.getJob(data.documents);
            console.log(data.documents);
        });
    }

    render() {

        return <>
            <JobList job={this.props.job} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        job: state.rabota.job

    }
}
export default connect(mapStateToProps,
    {getJob})(JobContainer);
