import User from "../User";
import {
  UserProfileWrapper,
  DataCard as Card,
  OtherInfo,
} from "./UserProfile.styles";

import { User as UserType } from "../../types";

type Props = {
  user: UserType;
};

const UserProfile = ({ user }: Props) => {
  console.log(user);

  return (
    <UserProfileWrapper>
      <User data={user} />
      <OtherInfo>
        <Card title="Other Details">
          <p>
            <span>Email</span>
            <span>{user.email}</span>
          </p>
          <p>
            <span>Job Title</span>
            <span>{user["job title"]}</span>
          </p>
          <p>
            <span>Gender</span>
            <span>{user.gender}</span>
          </p>
        </Card>
        <Card title="Professional Summary">
          <p>
            Lorem ipsum dolor sit amet. Eum earum provident et alias consequatur
            et odit iure. Qui fugit explicabo ex officia provident aut totam
            sunt id voluptatum porro qui harum aliquid a magni quia. Rem autem
            perferendis quo quia eveniet est eius perferendis.
          </p>
        </Card>
      </OtherInfo>
    </UserProfileWrapper>
  );
};

export default UserProfile;
