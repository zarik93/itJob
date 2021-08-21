import React, {Component} from 'react';
import "./itemJob.css";

const ItemJob = (props) => {

    return props.job ? props.job.map((item) => {
        const id = item.id;
        const name = item.name;
        const img = 'https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=150/' + `${item.logo}`;
        const location = item.cityName;
        const companyName = item.companyName;
        const salaryFrom = item.salaryFrom;
        const salaryTo = item.salaryTo;

        let itemSwitch = item.type == "Part Time" ? "badge badge-warning" : "badge badge-success";

        //pagination
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        console.log(props.totalUsersCount)

        return (
            <>
                <a href="job-single.html" className="job-list" key={id}>
                    <div className="company-logo col-auto">
                        <img src={img} alt="Company Logo"></img>
                    </div>
                    <div className="salary-type col-auto order-sm-3">
                        <span className="salary-range">{salaryFrom}-{salaryTo}</span>
                        <span className="dd"></span>
                    </div>
                    <div className="content col">
                        <h6 className="title">{name}</h6>
                        <ul className="meta">
                            <li><strong className="text-primary">{companyName}</strong></li>
                            <li><i className="fa fa-map-marker"></i>{location}</li>
                        </ul>



                    </div>
                </a>

            </>
        )
    }) : []
}
export default ItemJob

