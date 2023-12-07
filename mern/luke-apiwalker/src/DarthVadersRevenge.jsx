import { useState } from 'react';
import ReactPlayer from 'react-player'

export default function DarthVadersRevenge() {
  const getRevenge = () => setRevenge(
    <ReactPlayer
      url="https://www.youtube.com/watch?v=x7VHsntro4g"
      playing={true}
      onEnded={() => setRevenge(revengeButton)}
    />
  );

  const revengeButton = (<button onClick={getRevenge}>darth vader's revenge</button>);

  const [revenge, setRevenge] = useState(revengeButton);

  return revenge;
};
