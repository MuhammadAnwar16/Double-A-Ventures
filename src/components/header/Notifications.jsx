/* eslint-disable react/prop-types */
const Notifications = ({ notifications, showNotifications }) => {
  return (
    <div
      className={`${
        showNotifications
          ? `scale-100 opacity-100`
          : `scale-0 opacity-0`
      } absolute right-7 md:right-0 top-16 -z-50 transition-all duration-250 bg-black p-2 rounded-lg`}
    >
      <div className=" w-[450px] max-h-[200px] overflow-y-scroll scrollbar p-2">
        {notifications.length !== 0 ? (
          notifications.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black font-semibold rounded-sm p-2 my-2"
            >
              {item}
            </div>
          ))
        ) : (
          <div className="bg-white text-center text-black font-bold rounded p-2 my-2">
            No notifications
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;