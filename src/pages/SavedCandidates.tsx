import { useState, useEffect } from "react";
import CandidateCard from "../components/CandidateCard";
import { Candidate } from "../interfaces/Candidate.interface"

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("savedCandidates");
      const parsedData: Candidate[] = storedData ? JSON.parse(storedData) : [];
      setSavedCandidates(parsedData);
    } catch (error) {
      console.error("Error parsing saved candidates from localStorage:", error);
      setSavedCandidates([]);
    }
  }, []);

  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <h2>No candidates have been accepted</h2>
      ) : (
        savedCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))
      )}
    </div>
  );
};

export default SavedCandidates;
