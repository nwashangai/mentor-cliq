import { Badge } from "antd";
import {
  UserContainer,
  Image,
  Name,
  Details,
  Department,
  Region,
  SuggestionButton,
} from "./User.styles";
import { User } from "../../types";

type Props = {
  userIndex?: number;
  data: User;
  noMargin?: boolean;
  isBadge?: boolean;
  updateSuggestion?: (user: User) => void;
  suggestions?: User[];
};

export default ({
  userIndex,
  data,
  noMargin,
  isBadge,
  suggestions,
  updateSuggestion,
}: Props) => {
  const isSuggested = suggestions?.find(
    (user: User) => user.email === data.email
  );

  const component = () => (
    <UserContainer style={noMargin ? { marginTop: "0" } : {}} isBadge>
      <Image src="/images/user.png" alt="" width="100" height="100" />
      <Details>
        <Name>{`${data.first_name} ${data.last_name}`}</Name>
        <Department>{data.department}</Department>
        <Region>
          Region: <span>{`${data.city}, ${data.country}`}</span>
        </Region>
      </Details>
      {userIndex !== undefined && !isBadge && (
        <SuggestionButton
          type={isSuggested ? "primary" : "default"}
          onClick={() => updateSuggestion(data)}
        >
          {isSuggested ? "Unsuggest" : "Suggest"}
        </SuggestionButton>
      )}
    </UserContainer>
  );

  return (
    <>
      {isBadge ? (
        <Badge.Ribbon
          text={`Priority ${userIndex + 1}`}
          style={{ zIndex: "999", marginRight: isBadge ? "10px" : "unset" }}
        >
          {component()}
        </Badge.Ribbon>
      ) : (
        <>{component()}</>
      )}
    </>
  );
};
