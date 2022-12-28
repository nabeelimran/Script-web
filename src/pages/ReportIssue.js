import Footer from 'components/Footer';
import TvNavbar from 'components/TvNavbar';
import React from 'react';
import ReportIssueForm from 'sections/TvHomepage/ReportIssueForm';

function ReportIssue() {
    
    return (
        <div>
            <div className="container">
                <div className="mb-4 sm:mb-6 relative z-50">
                    <TvNavbar />
                </div>
                <div className="mb-4 sm:mb-6 relative z-50">
                    <ReportIssueForm />
                </div>
            </div>
            <Footer container="container" />
        </div>
    )
}

export default ReportIssue;
