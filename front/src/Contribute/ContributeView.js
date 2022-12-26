import { FaExclamationCircle } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { BsPaypal } from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import "./Contribute.scss";

const SECTIONS = [
    {
      id: "bugs",
      title: "Remonter des anomalies",
      text: "Créer une salle et partage de bons moments avec tes amis ou ta famille",
      icon: <FaExclamationCircle />,
      url: "/contribute/bugs",
    },
    {
      id: "feedback",
      title: "Donner votre avis",
      text: "Créer une salle et partage de bons moments avec tes amis ou ta famille",
      icon: <GiTalk />,
      url: "/contribute/feedback",
    },
    {
      id: "feedActivities",
      title: "Contribuer aux activitiés",
      text: "Créer une salle et partage de bons moments avec tes amis ou ta famille",
      icon: <IoGameController />,
      url: "/contribute/feed-activities",
    }
  ]; 
  /*
    'Accélerer le développement' : [
        { 
            id: 'donation', 
            class: 'body', 
            text: 'Faire un don', 
            icon: <BsPaypal />,
            url: "/contribute/feedback"
        },
        { 
            id: 'participate',
            class: 'body', 
            text: 'Participer', 
            icon: <HiUserGroup />,
            url: "/contribute/feedback"
        }
    ],*/


export default function ContributeView(props) {
  return (
    <div id="contribute" className="section-screen">
      <div className="section-central">
        {SECTIONS.map((section, index) => (
          <div key={index} className="contributeMenu">
            <div className="contributeMenu-header center">
              <h1>{section.title}</h1>
            </div>
            <div className="contributeMenu-content center">
                <p>{section.text}</p>
              <button className="btn btn-purple">Formulaire</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
