import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {

  useEffect(function(){
    getCabins().then(data=>console.log(data))
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <img src="https://bqnextqilqksuoqbqgek.supabase.co/storage/v1/object/public/cabins-images/cabin-002.jpg" alt="Cabin" width={400} />
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
