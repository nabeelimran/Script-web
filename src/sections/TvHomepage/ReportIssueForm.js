import Button from 'components/Button';
import FloatingLabelInput from 'components/FloatingLabelInput';
import FloatingLabelSelect from 'components/FloatingLabelSelect';
import FloatingLabelTextarea from 'components/FloatingLabelTextarea';
import Title from 'components/Title';
import { ToastMessage } from 'components/ToastMessage';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Api from 'services/api';
import LocalServices from 'services/LocalServices';
import { helper } from 'utils/helper';

function ReportIssueForm() {

    const [loading, setLoading] = useState(false);
    const token = LocalServices.getServices('token') || null;
    const user = LocalServices.getServices('user') || null;
    const navigate = useNavigate();

    const { register, handleSubmit, watch, setValue, formState: { errors }, } = useForm({
        reporterName:  user?.userName || "",
        reporterEmail: user?.email || "",
        issueFound: "",
        issueDetail: "",
        deviceUsed: "",
        browser: "",
        operatingSystem: ""
    });

    useEffect(() => {
        setValue('reporterName',  user?.userName || "")
        setValue('reporterEmail', user?.email || "",);
    }, [])

    const submitIssue = (data) => {
        if (token && user) {
            if (data.issueDetail.length > 300) {
                ToastMessage('Issue detail must be 300 character only');
                return;
            }
            setLoading(true);
            const req = {
                browser: data.browser,
                deviceUsed: data.deviceUsed,
                issueDetail: data.issueDetail,
                issueFound: data.issueFound,
                operatingSystem: data.operatingSystem,
                reporterEmail: data.reporterEmail,
                reporterName: data.reporterName,
                userId: user.userId
            };
    
            Api.reportIssue(req, 'report-issue').then((res) => {
                if (res && res.status === 200) {
                    ToastMessage(res?.data?.message || 'Success', true);
                    setLoading(false);
                    navigate({
                        pathname: "/",
                    })
                } else {
                    ToastMessage(res?.data?.message || 'Something went wrong');
                    setLoading(false);
                }
            }).catch((err) => {
                ToastMessage(err?.response?.data?.message || 'Something went wrong');
                setLoading(false);
            })    
        } else {

        }
        
    }

    const errorShow = (type) => {
        let error;
        if (type) {
            console.log(type)
            switch (type.type) {
                case "required":
                error = "This field is requird.";
                break;
                case "pattern":
                error = "Invalid Email"
                break;
        
                default:
                break;
            }
        }
    
        return error;
    };
    
    return (
        <div>
            <Title variant="20" className="text-primary font-medium mb-6">
                Report an Issue
            </Title>

            <form onSubmit={handleSubmit(submitIssue)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">
                    <div>
                        <FloatingLabelInput
                            lable="Name"
                            other={{
                                ...register("reporterName", { required: true }),
                            }}
                            error={errorShow(errors.reporterName)}
                            disabledInput={true}
                        />
                    </div>
                    <div>
                        <FloatingLabelInput
                            lable="Email"
                            other={{
                            ...register("reporterEmail", { required: true, pattern: /^[A-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/}),
                        }}
                        error={
                            errorShow(errors.reporterEmail)
                        }
                        disabledInput={true}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <FloatingLabelInput
                            lable="Issue Found"
                            other={{
                                ...register("issueFound", { required: true }),
                            }}
                            error={errorShow(errors.issueFound)}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <FloatingLabelTextarea placeholder="Issue Detail" other={{
                            ...register("issueDetail", {required: true}),
                            maxLength: {
                                value: 300,
                                message: "Issue detail have at most 300 characters",
                            },
                        }}
                        error={errorShow(errors.issueDetail)}/>
                    </div>
                    <div className="sm:col-span-2">
                        <FloatingLabelSelect
                            label="Device Used" options={helper.deviceList}
                            other={{
                                ...register("deviceUsed", { required: true }),
                            }}
                            error={errorShow(errors.deviceUsed)}
                        />
                    </div>
                    <div className="sm:col-span-2 text-white">
                        <FloatingLabelSelect
                            label="Browser" options={helper.browserList}
                            other={{
                                ...register("browser", { required: true }),
                            }}
                            error={errorShow(errors.browser)}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <FloatingLabelSelect
                            label="Operating System" options={helper.osList}
                            other={{
                                ...register("operatingSystem", { required: true }),
                            }}
                            error={errorShow(errors.operatingSystem)}
                        />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Button label="Submit Issue" type="submit" loader={loading} />
                </div>
            </form>
        </div>
    )
}

export default ReportIssueForm;
