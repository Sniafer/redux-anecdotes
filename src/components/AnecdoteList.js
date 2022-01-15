import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {
  addNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();
  const vote = (id) => {
    console.log("vote", id);
    dispatch(addVote(id));
    dispatch(addNotification(`You voted for "${anecdote.content}"`));
    setTimeout(() => dispatch(removeNotification()), 5000);
  };

  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter === "") {
      return state.anecdotes;
    }

    return state.anecdotes.filter((anecdote) =>
      anecdote.content.includes(state.filter)
    );
  });
  const sortedAnecdotes = anecdotes.sort((a, b) =>
    a.votes > b.votes ? -1 : b.votes > a.votes ? 1 : 0
  );
  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  );
};

export default AnecdoteList;
