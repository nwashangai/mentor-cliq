import { Tabs } from "antd";
import fetch from "unfetch";
import useSWR from "swr";

import UserProfile from "../components/UserProfile";
import Suggestions from "../components/Suggestions";
import Error from "../components/Error";
import Loader from "../components/Loader";

const { TabPane } = Tabs;

const fetcher = (url) => fetch(url).then((r) => r.json());

const Profile = () => {
  const { data: suggestions, error } = useSWR(`/api/suggestions`, fetcher);
  const { data: user, error: userError } = useSWR(`/api/user`, fetcher);

  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Profile" key="1">
        {userError ? (
          <Error message="failed to load user" />
        ) : !user ? (
          <Loader />
        ) : (
          <UserProfile user={user} />
        )}
      </TabPane>
      <TabPane tab="Suggestions" key="2">
        {error ? (
          <Error message="failed to load suggestions" />
        ) : !suggestions ? (
          <Loader />
        ) : (
          <Suggestions suggestions={suggestions} />
        )}
      </TabPane>
    </Tabs>
  );
};

export default Profile;
