import { Candidate } from "../interfaces/Candidate.interface";

interface CandidateCardProps {
    candidate: Candidate;
  }
  
  const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
    if (!candidate) return null;
  
    return (
      <div className="candidate-card" >
        <img src={candidate.avatar_url} alt="Avatar" width={100} />
        <h2>{candidate.login}</h2>
        <p>Location: {candidate.location || "Unknown"}</p>
        <p>Email: {candidate.email || "Not available"}</p>
        <p>Company: {candidate.company || "N/A"}</p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer" className="nav-link">
          GitHub Profile
        </a>
      </div>
    );
  };
  
  export default CandidateCard;