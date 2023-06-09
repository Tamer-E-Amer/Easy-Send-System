// Icons
import { GiGears } from "react-icons/gi"; // Operation
import { MdQrCodeScanner } from "react-icons/md"; //  Microfilm
import { MdSyncProblem } from "react-icons/md"; //   Follow up
import { BiCodeAlt } from "react-icons/bi"; //    Applications
import { FaUsers } from "react-icons/fa"; //    Hr
import { FaNetworkWired } from "react-icons/fa"; //    Remote offices
export const depData = [
  {
    id: 1,
    title: "Operation",
    icon: <GiGears />,
    about:
      "Operation deparments id managed by Eng. Mostafa salem and respnsible for provide first level technical support for all remote offices and managements that are managed by Damietta branch. It solves the problems in Internal and external Network and programs.",
    problemsCount: {
      problemsAbout: "HW and Networking",
      openProblems: 4,
      closedProblems: 60,
    },
  },
  {
    id: 2,
    title: "Follow up",
    icon: <MdSyncProblem />,
    about:
      "Operation deparments id managed by Eng. Mostafa salem and respnsible for provide first level technical support for all remote offices and managements that are managed by Damietta branch. It solves the problems in Internal and external Network and programs.",
    problemsCount: {
      problemsAbout: "Tax files and Safe",
      openProblems: 4,
      closedProblems: 60,
    },
  },
  {
    id: 3,
    title: "Microfilm",
    icon: <MdQrCodeScanner />,
    about:
      "Operation deparments id managed by Eng. Mostafa salem and respnsible for provide first level technical support for all remote offices and managements that are managed by Damietta branch. It solves the problems in Internal and external Network and programs.",
    problemsCount: {
      problemsAbout: "Distributed systems",
      openProblems: 7,
      closedProblems: 25,
    },
  },
  {
    id: 4,
    title: "Applications",
    icon: <BiCodeAlt />,
    about:
      "Operation deparments id managed by Eng. Mostafa salem and respnsible for provide first level technical support for all remote offices and managements that are managed by Damietta branch. It solves the problems in Internal and external Network and programs.",
    problemsCount: {
      problemsAbout: "Systems and pplications",
      openProblems: 4,
      closedProblems: 60,
    },
  },
  {
    id: 5,
    title: "HR",
    icon: <FaUsers />,
    about: "",
  },
  {
    id: 6,
    title: "Remote Offices",
    icon: <FaNetworkWired />,
    about: "",
  },
];
