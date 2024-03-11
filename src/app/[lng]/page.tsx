import Home from './components/Home';

const Page = ({params: { lng }}: { params: { lng: string } }) => {
  return (
    <Home params={{ lng }}/>
  )
}

export default Page;
