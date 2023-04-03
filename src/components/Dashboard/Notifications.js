import Title from "components/Title";
import { useEffect, useState } from "react";
import Api from "services/api";

function Notifications() {

    const [notificationList, setNotificationList] = useState([]);

    const getNotifications = async () => {
        try {
            const res = await Api.getNotifications();
            if(res && res.status === 200) {
                setNotificationList(res.data.data);
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
      getNotifications();
    }, [])
    

    return (
        <div className="dashboard-top-spacing dashboard-bottom-spacing">
            <div className="dashboard-layout">
                <Title
                    className="text-primary text-left font-semibold mb-6"
                    variant="24"
                >
                    Notifications
                </Title>
                <div className="flex flex-col">
                    {notificationList && notificationList.length > 0 ? notificationList.map((notification, index) => 
                    (
                        <div className="mb-5" key={index}>
                            <div className="bg-[#0E0E0F] dark:border-neutral-600 rounded-lg shadow-lg dark:bg-neutral-700 w-full">
                                <div className="border-b-2 border-neutral-100 py-3 px-4 dark:border-neutral-600 dark:text-neutral-50">
                                    <div className="relative h-8 flex">
                                        <img src={notification.icon} className="rounded-full border border-gray-100 shadow-sm" alt="icon" />
                                        <p className="ml-3 items-center my-auto">
                                            {notification.app}
                                        </p>
                                    </div>
                                </div>
                                <div class="px-4 py-6 border-1">
                                    <Title
                                        className="text-primary text-left font-semibold mb-1"
                                        variant="20"
                                    >
                                        {notification?.title}
                                    </Title>
                                    <Title
                                        className="text-left"
                                        variant="16"
                                    >
                                        {notification?.message}
                                    </Title>
                                </div>
                            </div>
                        </div>
                    )
                    ) : null}
                </div>
            </div>
        </div>
    );

}

export default Notifications;