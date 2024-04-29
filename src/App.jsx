import NavBar from "./components/Navbar"
import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
import JobCard from "./components/JobCard/JobCard"
import JobData from "./JobDummyData"
import { useEffect,useState } from "react"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config"


function App() {
 const [jobs, setJobs] = useState([]);

 const fetchJobs = async () => {
  const q = query(collection(db, "Jobs"));
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
 }
 useEffect(()=>{
     fetchJobs
 },[])


  return (
    <div>
      <NavBar/>
      <Header/>
      <SearchBar/>
      {JobData.map((job)=>(
        <JobCard key={job.id}{...job}/> // {...job} is a spread operator
      ))}
      {/* <JobCard/> */}
      
    </div>
  )
}

export default App
