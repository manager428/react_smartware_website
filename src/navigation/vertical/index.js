import { Edit, Grid, Chrome, CreditCard, Settings, Users, Globe } from "react-feather"

export default [
  {
    id: "clients",
    title: "Clients",
    icon: <Grid size={13} />,
    navLink: "/client"
  },
  {
    id: "activities",
    title: "Activities",
    icon: <Edit size={13} />,
    navLink: "/activities"
  },
  {
    id: "reports",
    title: "Reports",
    icon: <Chrome size={13} />,
    navLink: "/reports"
  },
  {
    id: "usageManagement",
    title: "Usage Management",
    icon: <CreditCard size={13} />,
    navLink: "/accounts?tab=6"
  },
  {
    id: "account",
    title: "Account",
    icon: <Globe size={13} />,
    navLink: "/account"
  },
  {
    id: "users",
    title: "Users",
    icon: <Users size={13} />,
    navLink: "/users?tab=4"
  },
  {
    id: "customisation",
    title: "Customisation",
    icon: <Settings size={13} />,
    navLink: "/custom"
  }
]
