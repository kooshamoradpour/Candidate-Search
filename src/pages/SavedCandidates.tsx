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
      setSavedCandidates([]); // Prevent breaking UI
    }
  }, []);

  return (
    <div className="saved-candidates">
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <h2 className="no-candidates-message">No candidates have been accepted</h2>
      ) : (
        <div className="candidates-list">
          {savedCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedCandidates;