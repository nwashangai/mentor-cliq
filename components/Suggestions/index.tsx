import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Container, Title, Note } from "./Suggestions.styles";
import User from "../User";

type User = {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  department: string;
  "job title": string;
  country: string;
  city: string;
};

type Props = {
  suggestions: User[];
};

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  marginTop: "20px",
  border: isDragging ? "2px solid lightgreen" : "unset",

  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "#75757525" : "unset",
});

const Suggestions = ({ suggestions }: Props) => {
  const [users, updateUsers] = useState<User[]>(suggestions);

  const reorder = (list: User[], startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    updateUsers(reorder(users, result.source.index, result.destination.index));
  };

  return (
    <div style={{ width: "100%" }}>
      <Title>My Suggestions</Title>
      <Note title="Information">
        <p>
          You can re-order your suggestions by simply dragging the items to the
          required location
        </p>
      </Note>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {users.map((item, index) => (
                <Draggable
                  key={`user-ind-${index}`}
                  draggableId={`user-ind-${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <User data={item} userIndex={index} noMargin isBadge />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Suggestions;
