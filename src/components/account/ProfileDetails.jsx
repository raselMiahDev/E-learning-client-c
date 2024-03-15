import { Tabs } from "keep-react";
import { Gear, Cards, User } from "phosphor-react";
import MyCourse from "./MyCourse";
import ProfileEdit from "./ProfileEdit";
import Notification from "./Notification";
import EmailForm from "./../../Dashboard/Admin/components/EmailForm";

const ProfileDetails = () => {
  return (
    <div className="md:mt-20 mt-16 md:px-16">
      <Tabs
        aria-label="Tabs"
        style="underline"
        className="flex justify-center md:justify-start"
        iconPosition="left"
      >
        <Tabs.Item title="Course" active={true} icon={<Cards size={20} />}>
          <MyCourse />
        </Tabs.Item>
        <Tabs.Item title="Profile" icon={<User size={20} />}>
          <ProfileEdit />
        </Tabs.Item>
        <Tabs.Item title="Message" notification={3} icon={<Gear size={20} />}>
          <Notification />
        </Tabs.Item>
        <Tabs.Item title="form" notification={3} icon={<Gear size={20} />}>
          <EmailForm />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default ProfileDetails;
