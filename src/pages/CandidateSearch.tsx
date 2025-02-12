import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]") as Candidate[];
    setSavedCandidates(storedCandidates);
  }, []);

  const fetchCandidates = async () => {
    const response = await fetch("https://api.github.com/users?per_page=30");
    const users = await response.json();

    // Fetch full details for each user
    const detailedUsers = await Promise.all(
      users.map(async (user: Candidate) => {
        const userDetails = await fetch(`https://api.github.com/users/${user.login}`).then((res) =>
          res.json()
        );
        return { ...user, name: userDetails.name, email: userDetails.email, company: userDetails.company, location: userDetails.location };
      })
    );

    setCandidates(detailedUsers);
  };

  const saveCandidate = () => {
    const newSavedCandidates = [...savedCandidates, candidates[currentIndex]];
    setSavedCandidates(newSavedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(newSavedCandidates));
    nextCandidate();
  };

  const nextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCandidates([]);
    }
  };

  if (candidates.length === 0) {
    return <h2>No more candidates available</h2>;
  }

  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateCard candidate={candidates[currentIndex]} />
      <button onClick={saveCandidate}>+</button>
      <button onClick={nextCandidate}>-</button>
    </div>
  );
  
};

export default CandidateSearch;
