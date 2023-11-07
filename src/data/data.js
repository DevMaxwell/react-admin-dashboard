import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  //   UilSignOutAlt,
  UilMoneyWithdrawal,
  UilUsdSquare,
} from "@iconscout/react-unicons";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

export const sidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

export const cardsData = [
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, 	#a497f0 0%, #9387d8 100%)",
      boxShadow: "0px 10px 20px 0px #a497f0",
    },
    barValue: 60,
    value: "4,970",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [82, 40, 21, 33, 14, 70, 100],
      },
    ],
  },
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #a6c1ee 0%, #97b7f0 100%)",
      boxShadow: "0px 10px 20px 0px #a6c1ee",
    },
    barValue: 70,
    value: "25.970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },

  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #fbc2eb 0%, #faafe5 100%)",
      boxShadow: "0px 10px 20px 0px #fbc2eb",
    },
    barValue: 60,
    value: "4,970",
    png: UilClipboardAlt,
    series: [
      {
        name: "expenses",
        data: [82, 40, 21, 33, 14, 70, 100],
      },
    ],
  },
];

export const UpdateData = [
  {
    img: img1,
    name: "Vicky James",
    noti: "just ordered a margarita",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Meg thee",
    noti: "just ordered caramel",
    time: "25 seconds ago",
  },
  {
    img: img3,
    name: "Vicky James",
    noti: "2 chicken pies and a coke",
    time: "2 hours ago",
  },
  // {
  //   img: img3,
  //   name: "Paul Pogba",
  //   noti: "2 chicken pies and a coke",
  //   time: "2 hours ago",
  // },
  // {
  //   img: img3,
  //   name: "Ricky Eugene",
  //   noti: "2 chicken pies and a coke",
  //   time: "3 hours ago",
  // },
];
