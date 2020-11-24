import {
  useState
} from "react";


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(item, replace = false) {
    setHistory(prev => {
      if (replace) {

        prev.pop();
      }
      return [...prev, item];
    })

    setMode(item);
  }

  function back() {

    const prevHistory = [...history];

    if (prevHistory.length > 1) {

      history.pop();
      setMode(history[history.length - 1])
      setHistory(prev => ([...prev]));
    }
  }
  return {
    mode,
    transition,
    back
  };
}