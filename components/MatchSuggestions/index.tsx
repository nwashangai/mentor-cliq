import User from "../User";
import { message } from "antd";

import {
  SuggestionContainer,
  Title,
  UsersHead,
  Users,
} from "./MatchSuggestions.styles";
import { User as UserType } from "../../types";

type Props = {
  potentialMatchers: UserType[];
  suggestions: UserType[];
  setSuggestions: (users: UserType[]) => void;
  currentUser: UserType;
};

export default ({
  potentialMatchers,
  setSuggestions,
  suggestions,
  currentUser,
}: Props) => {
  const updateSuggestion = (user: UserType) => {
    const newSuggestion = [...suggestions];
    const userIndex = newSuggestion.findIndex(
      (suggested: UserType) => suggested.email === user.email
    );

    if (userIndex >= 0) {
      newSuggestion.splice(userIndex, 1);
      setSuggestions(newSuggestion);
    } else if (suggestions.length < 5) {
      setSuggestions([...suggestions, user]);
    } else {
      message.info("You can only select a miximum of 5 suggestions");
    }
  };
  return (
    <SuggestionContainer>
      <Title>Find Match</Title>
      <User data={currentUser} />
      <UsersHead>Potential Matches</UsersHead>
      <Users>
        {potentialMatchers.map((data, index) => (
          <User
            key={`matchers-${index}`}
            userIndex={index}
            data={data}
            updateSuggestion={updateSuggestion}
            suggestions={suggestions}
          />
        ))}
      </Users>
    </SuggestionContainer>
  );
};
