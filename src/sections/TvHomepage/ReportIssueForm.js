import Button from 'components/Button';
import FloatingLabelInput from 'components/FloatingLabelInput';
import FloatingLabelSelect from 'components/FloatingLabelSelect';
import FloatingLabelTextarea from 'components/FloatingLabelTextarea';
import Title from 'components/Title';
import { ToastMessage } from 'components/ToastMessage';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Api from 'services/api';
import { helper } from 'utils/helper';

function ReportIssueForm() {

    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors }, } = useForm({
        reporterName:  "",
        reporterEmail: "",
        issueFound: "",
        issueDetail: "",
        deviceUsed: "",
        browser: "",
        operatingSystem: ""
    });

    const submitIssue = (data) => {
        debugger
        setLoading(true);
        const req = {
            browser: "",
            deviceUsed: "",
            issueDetail: "",
            issueFound: "",
            operatingSystem: "",
            reporterEmail: "",
            reporterName: "",
            userId: 0
        };

        Api.reportIssue(req, 'report-issue').then((res) => {
            if (res && res.status === 200) {
                ToastMessage(res?.data?.message || 'Success', true);
                setLoading(false);
            } else {
                ToastMessage(res?.data?.message || 'Something went wrong');
                setLoading(false);
            }
        }).catch((err) => {
            ToastMessage(err?.error?.message || 'Something went wrong');
            setLoading(false);
        })
    }

    const errorShow = (type) => {
        let error;
        if (type) {
          switch (type.type) {
            case "required":
              error = "This field is requird. Please enter password";
              break;
            case "minLength":
              error = "Password must have at least 8 characters";
              break;
            case "pattern":
              error =
                "Password Should be eight characters long and alphanumeric with special characters";
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
                        />
                    </div>
                    <div>
                        <FloatingLabelInput
                            lable="Email"
                            other={{
                            ...register("reporterEmail", { required: true }),
                        }}
                        error={errors.reporterEmail && "This field is requird. Please enter email."}
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
                            ...register("issueDetail"),
                            maxLength: {
                                value: 300,
                                message: "Issue Detail have at most 300 characters",
                            },
                        }} />
                    </div>
                    <div className="sm:col-span-2">
                        <FloatingLabelSelect
                            label="Device Used" options={helper.deviceList}
                            other={{
                                ...register("deviceUsed", { required: true }),
                            }}
                        />
                    </div>
                    <div className="sm:col-span-2 text-white">
                        <FloatingLabelSelect
                            label="Browser" options={helper.browserList}
                            other={{
                                ...register("browser", { required: true }),
                            }}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <FloatingLabelSelect
                            label="Operating System" options={helper.osList}
                            other={{
                                ...register("operatingSystem", { required: true }),
                            }}
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
