import { useRef, useState } from "react";
import Countries from "../Countries/Countries";
import Leagues from "../Leagues/Leagues";
import Navmenu from "../../../../Components/Navmenu/Navmenu";
import Teams from "../Teams/Teams";
import Players from "../Players/Players";
import Details from "../Players/Details";
import MyTeams from "../MyTeams/MyTeams";
import { useTeams } from "../../../../Hooks/useTeams";

export default function HomeCreateTeam() {
  const [countryId, setCountryId] = useState("");
  const [leagueId, setLeagueId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [players, setPlayers] = useState([]);
  const [teamName, setTeamName] = useState([]);
  const [continueButton, setContinueButton] = useState(false);
  const { team1, team2 } = useTeams();
  const countriesRef = useRef();
  const leaguesRef = useRef();
  const teamsRef = useRef();

  return (
    <div className="bg-gradient-to-r from-lime-50 to-lime-200 px-6 md:p-0">
      <Players
        showModal={showModal}
        setShowModal={setShowModal}
        players={players}
        teamName={teamName}
        setPlayers={setPlayers}
      />
      {(!continueButton && !team1.name) || (!continueButton && !team2.name) ? (
        <div className="h-4/5 overflow-hidden">
          <MyTeams setContinueButton={setContinueButton} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <section ref={countriesRef}>
            <Countries
              setCountryId={setCountryId}
              setLeagueId={setLeagueId}
              leaguesRef={leaguesRef}
            />
          </section>

          <section ref={leaguesRef}>
            <Leagues
              leaguesRef={leaguesRef}
              setCountryId={setCountryId}
              setLeagueId={setLeagueId}
              countryId={countryId}
              teamsRef={teamsRef}
            />
          </section>

          <section ref={teamsRef}>
            <Teams
              teamsRef={teamsRef}
              setLeagueId={setLeagueId}
              leagueId={leagueId}
              setShowModal={setShowModal}
              setPlayers={setPlayers}
              setTeamName={setTeamName}
            />
          </section>
        </div>
      )}
    </div>
  );
}
