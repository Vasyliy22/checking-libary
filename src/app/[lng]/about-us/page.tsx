import AboutUs from "../components/AboutUs";

const Page = ({params: { lng }}: { params: { lng: string } }) => {
  return (
    <AboutUs params={{ lng }} />
  )
}

export default Page;